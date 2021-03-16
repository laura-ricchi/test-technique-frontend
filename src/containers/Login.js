import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Button, Grid, TextField } from "@material-ui/core";
import { Helmet } from "react-helmet";
import ModalForgetPassword from "../components/Modal";
import "../assets/css/Common.css";
import "../assets/css/Login.css";

// création de la page Login
const Login = ({ loginUser }) => {
  // création des états utilisés pour la connexion au compte
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // création de la fonction handleLoginSubmit pour le formulaire du login
  const handleLoginSubmit = async (event) => {
    try {
      // empêcher le navigateur de changer la page
      event.preventDefault();
      // si le mot de passe et mail ne sont pas saisis
      if (!email || !password) {
        alert("Veuillez remplir tous les champs");
      } else {
        // alors on récupère la réponse du backend en post (login)
        const response = await axios.post(
          "http://localhost:3001/login",
          // dans le body on récupère l'email le mot de passe et la clé
          {
            email: email,
            password: password,
          }
        );
        // si le token est récupéré lors de la requête et la clé
        if (response.data.token && response.data.key) {
          // mise à jour de la variable loginUser
          loginUser(
            response.data.key,
            response.data.token,
            response.data.email
          );
          // aller sur la page avec les profils
          history.push("/home");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Grid className="container">
        <Helmet>
          <title>Bienvenue sur Meet World</title>
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
              <div>
                <Button variant="contained" type="submit">
                  Se connecter
                </Button>
              </div>
              <ModalForgetPassword />
              <Link to="/signup" className="account">
                Vous découvrez Meet World ? Créez votre compte !
              </Link>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
