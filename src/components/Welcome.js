import React from "react";
import "../assets/css/Common.css";
import "../assets/css/Welcome.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const ButtonSignUp = styled(Button)({
  background: "#4183d7",
  border: 0,
  borderRadius: 10,
  boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
  color: "white",
  width: 150,
  height: 44,
  fontSize: 18,
  padding: "0 30px",
});

const Welcome = () => {
  return (
    <Grid className="container-welcome">
      <Grid className="welcome-meet-people">
        <Grid className="title-welcome-meet-people">
          La vie est une aventure...
        </Grid>

        <ButtonSignUp to="/signup">S'inscrire</ButtonSignUp>
      </Grid>
    </Grid>
  );
};

export default Welcome;

{
  /* <div className="presentation-meet-people">
Découvrez des nouvelles personnes lors de vos voyages aux quatres
coins du monde et rejoignez une communauté de globe-trotteurs
<Icon>public</Icon>
</div> */
}
