import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/Common.css";
import "../assets/css/Header.css";
import {Button, Grid }from "@material-ui/core";
import {BiWorld} from "react-icons/bi";
import Cookies from "js-cookie";
import LoginButton from "../components/LoginButton";
import User from "../components/User"

const Header = ({ setKeyTest, token, setToken }) => {
  const history = useHistory();

  return (
    <header>
      <Grid className="element-header">
        <div className="title-header">
          <Link to="/" className="name-header">
          MEET WORLD  </Link>
          <BiWorld className="icon-public-header"/>
       
        </div>
        
        {!token ? (
          <div className="element-button">
          <LoginButton/>
          <User/>
          </div>
        ) : (
          <div className="element-button">
            <Button
              variant="contained"
              className="button-login"
              onClick={() => {
                // mise à jour des fonctions setKey et setToken à null
                setKeyTest(null);
                setToken(null);
                // suppression du cookie "key"
                Cookies.remove("key");
                // suppression du cookie "token"
                Cookies.remove("token");
                // aller sur la page d'accueil
                history.push("/");
              }}
            >
              Déconnexion
            </Button>
          </div>
        )}
      </Grid>
    </header>
  );
};

export default Header;
