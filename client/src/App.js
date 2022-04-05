import React from "react";
import { Container, Grid } from "@mui/material";
import Bar from "./components/Bar/Bar";
import MainList from "./components/MainList/MainList";
import Form from "./components/Form/Form";

const App = () => {
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

export default App;
