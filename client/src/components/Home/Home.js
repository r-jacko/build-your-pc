import React from "react";
import { Container, Grid } from "@mui/material";
import Bar from "../Bar/Bar";
import MainList from "../MainList/MainList";
import Form from "../Form/Form";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent='space-between' spacing={3}>
        <Grid item xs={12}>
          <Bar />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <MainList />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
