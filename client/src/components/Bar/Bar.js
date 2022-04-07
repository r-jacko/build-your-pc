import React from "react";
import logo from "../../images/logo.png";
import { Grid, Typography } from "@mui/material";

const Bar = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} textAlign="end">
        <Typography variant="h2">BUILD YOUR</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={logo} alt="Build Your PC" height="60" />
      </Grid>
    </Grid>
  );
};

export default Bar;
