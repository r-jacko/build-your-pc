import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Bar from "../Bar/Bar";
import MainList from "../MainList/MainList";
import Form from "../Form/Form";
import { getList } from "../../api";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [elements, setElements] = useState();
  const loadData = async () => {
    try {
      const { data } = await getList();
      setElements(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent='space-between' spacing={3}>
        <Grid item xs={12}>
          <Bar />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <MainList setCurrentId={setCurrentId} elements={elements}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} elements={elements}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
