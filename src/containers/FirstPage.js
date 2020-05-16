import React from "react";
import Grid from "@material-ui/core/Grid";
import Presentation from "../components/Presentation";
import Welcome from "../components/Welcome";

const FirstPage = () => {
  return (
    <Grid>
      <Welcome />
      <Presentation />
    </Grid>
  );
};

export default FirstPage;
