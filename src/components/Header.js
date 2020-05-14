import React from "react";
import "../assets/css/Common.css";
import "../assets/css/Header.css";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { styled } from "@material-ui/core/styles";

const Header = ({ setToken, token, username }) => {
  const history = useHistory();

  const MyButton = styled(Button)({
    background: "linear-gradient(45deg, #4183d7 30%, #44b0ea 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
    color: "white",
    width: 120,
    height: 44,
    padding: "0 30px",
  });

  return (
    <header>
      <Grid className="element-header">
        <Link to="/" className="name-header">
          MEET WORLD <Icon>public</Icon>
        </Link>
        {!token ? (
          <div className="element-button">
            <MyButton
              variant="contained"
              className="button-login"
              onClick={() => {
                history.push("/login");
              }}
            >
              Connexion
            </MyButton>
          </div>
        ) : (
          <div className="element-button">
            <MyButton
              variant="contained"
              className="button-login"
              onClick={() => {
                // mise à jour de la fonction setToken à null
                setToken(null);
                // suppression du cookie "token"
                Cookies.remove("token");
                // suppression du cookie "username"
                Cookies.remove("username");
                // aller sur la page d'accueil "home"
                history.push("/login");
              }}
            >
              Déconnexion
            </MyButton>
          </div>
        )}
      </Grid>
    </header>
  );
};

export default Header;
