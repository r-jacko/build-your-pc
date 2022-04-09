import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Bar from "../Bar/Bar";
import MainList from "../MainList/MainList";
import Form from "../Form/Form";
import { getList, registerNewUser} from "../../api";
import { CircularProgress } from "@mui/material";
import {v4 as uuidv4} from 'uuid'

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [elements, setElements] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const loadData = async () => {
    try {
      const { data } = await getList();
      setElements(data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };
  const userAuth = async ()=>{
    if(localStorage.getItem('profile')) return
    localStorage.setItem('profile', JSON.stringify({userId: uuidv4(), updateKey: uuidv4()}))
    console.log(localStorage.getItem('profile'))
    registerNewUser(JSON.parse(localStorage.getItem('profile')))
  }
  useEffect(() => {
    loadData();
  }, [isLoading]);
  useEffect(()=>{
    setIsLoading(true)
    userAuth()
  },[])
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent='space-between' spacing={3}>
        <Grid item xs={12}>
          <Bar />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          {isLoading? (<CircularProgress/>) : (<MainList setCurrentId={setCurrentId} elements={elements} isLoading={isLoading} setIsLoading={setIsLoading} setElements={setElements}/>)}
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} elements={elements} setIsLoading={setIsLoading}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
