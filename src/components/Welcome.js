import React from "react";
import "../assets/css/Common.css";
import "../assets/css/Welcome.css";
import { Grid } from "@material-ui/core";

const Welcome = () => {
  return (
    <Grid className="container-welcome">
      <Grid className="welcome-meet-world">
        <Grid className="title-welcome-meet-world">
        Life is an adventure 
        </Grid>
        <Grid className="presentation-welcome">Welcome to Meet World !</Grid>
     
      </Grid>
    </Grid>
  );
};

export default Welcome;
