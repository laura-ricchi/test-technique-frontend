import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import ModalForgetPassword from "../components/Modal";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Login = ({ onLogin }) => {
  // création des états utilisés pour la connexion au compte
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const MyButton = styled(Button)({
    background: "linear-gradient(45deg, #4183d7 30%, #44b0ea 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
    color: "white",
    width: 180,
    height: 44,
    padding: "0 30px",
  });

  const handleLoginSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://my-profile-site-by-lauraricchi.herokuapp.com/login",
        { email: email, password: password }
        // {
        //   headers: {
        //     Authorization: "Bearer " + token,
        //     "Content-type": "application/json",
        //   },
        // }
      );
      // si le token est récupéré lors de la requête sur le backend
      if (response.data.token) {
        console.log("response.data =", response.data);
        // met à jour la variable onLogin
        onLogin(response.data.token, response.data.account.username);
        // et aller sur la page d'accueil - Changement de page - avec le token de l'user
        history.push("/");
        // sinon afficher un message d'erreur
      } else {
        alert("Token is missing");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Grid className="container">
      <Helmet>
        <title>Bienvenue sur People Meets World</title>
      </Helmet>
      <Grid className="form">
        <Grid className="form-login">
          <form onSubmit={handleLoginSubmit}>
            <h2>Connexion à votre compte</h2>
            <p>Votre email</p>
            <TextField
              className="input"
              type="text"
              variant="outlined"
              label="Email"
              size="small"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <p>Votre mot de passe</p>
            <TextField
              className="input"
              variant="outlined"
              type="password"
              label="Mot de passe"
              placeholder="●●●●●●●●"
              size="small"
              autoFocus
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="button-login">
              <MyButton variant="contained" type="submit">
                Se connecter
              </MyButton>
            </div>
            <ModalForgetPassword />
            <Link to="/signup" className="account">
              Vous découvrez Meet World ? Créez votre compte !
            </Link>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Login;
