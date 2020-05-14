import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/Common.css";
import "../assets/css/Welcome.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const ButtonSignUp = styled(Button)({
  background: "#4183d7",
  border: 0,
  borderRadius: 10,
  boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
  color: "white",
  width: 150,
  height: 44,
  fontSize: 14,
  padding: "0 30px",
});

const Welcome = () => {
  const history = useHistory();

  return (
    <Grid className="container-welcome">
      <Grid className="welcome-meet-world">
        <Grid className="title-welcome-meet-world">
          La vie est une aventure...
        </Grid>

        <Grid className="presentation-welcome">Bienvenue !</Grid>

        <ButtonSignUp
          onClick={() => {
            history.push("/signup");
          }}
        >
          S'inscrire
        </ButtonSignUp>
      </Grid>
    </Grid>
  );
};

export default Welcome;
