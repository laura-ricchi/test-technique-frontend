import React from "react";
import "../assets/css/Common.css";
import "../assets/css/Welcome.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import picture from "../assets/img/picture-people.png";

const ButtonSignUp = styled(Button)({
  background: "#4183d7",
  border: 0,
  borderRadius: 10,
  boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
  color: "white",
  width: 150,
  height: 35,
  fontSize: 12,
  padding: "0 30px",
});

const Welcome = () => {
  return (
    <Grid className="container-welcome">
      <img alt="people" src={picture}></img>
      <div>Bienvenue sur notre site Meets People</div>
      <div>
        Découvrez de nouvelles personnes lors de vos voyages aux quatres coins
        du monde
      </div>
      <ButtonSignUp to="/signup">S'inscrire</ButtonSignUp>
    </Grid>
  );
};

export default Welcome;
