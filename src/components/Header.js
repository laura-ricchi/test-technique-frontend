import React from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { styled } from "@material-ui/core/styles";

const Header = () => {
  const history = useHistory();

  const MyButton = styled(Button)({
    background: "linear-gradient(45deg, #4183d7 30%, #44b0ea 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
    color: "white",
    width: 170,
    height: 48,
    padding: "0 30px",
  });

  return (
    <header>
      <Grid className="element-header">
        <Link to="/" className="name-header">
          MEET WORLD <Icon>public</Icon>
        </Link>

        <div className="element-button">
          <MyButton
            variant="contained"
            className="button-login"
            onClick={() => {
              history.push("/login");
            }}
          >
            Se connecter
          </MyButton>
        </div>
      </Grid>
    </header>
  );
};

export default Header;
