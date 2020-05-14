import React from "react";
import Grid from "@material-ui/core/Grid";
import "../assets/css/Common.css";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Grid>
        <span>
          Test technique réalisé avec
          <a href="https://fr.reactjs.org/"> React </a>
          <span>et </span>
          <a href="https://material-ui.com/">Material-UI </a>
          <span>par </span>
        </span>
        <a href="https://www.linkedin.com/in/lauraricchi/"> Laura Ricchi </a>
      </Grid>
    </footer>
  );
};
export default Footer;
