import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Bar from "../Bar/Bar";
import MainList from "../MainList/MainList";
import Form from "../Form/Form";
import { getList, registerNewUser, getUserList } from "../../api";
import { CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [elements, setElements] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [listId, setListId] = useState();
  const navigate = useNavigate();
  const loadData = async () => {
    if (user) {
      setListId(window.location.pathname.slice(1));
      console.log(listId, user);
      console.log(listId === user);
      if (listId === user) {
        navigate("/");
      } else if (listId) {
        const { data } = await getUserList(listId);
        setElements(data.data);
      } else {
        try {
          const { data } = await getList();
          setElements(data.data);
        } catch (error) {
          console.log(error);
        }
      }
      setIsLoading(false);
    }
  };
  const userAuth = () => {
    if (!localStorage.getItem("profile")) {
      localStorage.setItem(
        "profile",
        JSON.stringify({ userId: uuidv4(), updateKey: uuidv4() })
      );
      registerNewUser(JSON.parse(localStorage.getItem("profile")));
    }
    setUser(JSON.parse(localStorage.getItem("profile")).userId);
  };
  useEffect(() => {
    loadData();
  }, [isLoading]);
  useEffect(() => {
    userAuth();
    setIsLoading(true);
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={12}>
          <Bar />
        </Grid>
        <Grid item xs={12} md={listId? 12 : 6} lg={listId? 12 : 8}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <MainList
              setCurrentId={setCurrentId}
              elements={elements}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setElements={setElements}
              user={user}
              listId={listId}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          {!listId ? (
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              elements={elements}
              setIsLoading={setIsLoading}
              user={user}
            />
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
