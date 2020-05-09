import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <header>
      <Grid className="element-header">
        <div className="name-header">PEOPLE MEETS WORLD</div>
        <div className="element-button">
          <Button
            variant="contained"
            color="primary"
            className="button-login"
            onClick={() => {
              history.push("/login");
            }}
          >
            Se connecter
          </Button>
        </div>
      </Grid>
    </header>
  );
};

export default Header;
