import React from "react";
import logo from "../../images/newLogo.png";
import { Grid, Typography } from "@mui/material";

const Bar = () => {
  return (
    <Grid container>
      <Grid item xs={12} textAlign="center">
        <img src={logo} alt="Build Your PC" height="80"/>
      </Grid>
    </Grid>
  );
};

export default Bar;
