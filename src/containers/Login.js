import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { Helmet } from "react-helmet";
import ModalForgetPassword from "../components/ModalForgetPassword";
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
    <Container fluid className="form-container">
      <Helmet>
        <title>Bienvenue sur Meet World</title>
      </Helmet>
      <Grid className="form-grid">
        <Grid className="form">
          <form
            onSubmit={handleLoginSubmit}
            className="form-login"
          >
            <h2>Connexion à votre compte</h2>
            <p>Your email</p>
            <div className="form-textField">
              <TextField
                className="input"
                type="email"
                placeholder="youremail@email.com"
                variant="outlined"
                size="small"
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <p>Your password</p>
            <div className="form-textField">
              <TextField
                className="input"
                variant="outlined"
                type="password"
                placeholder="●●●●●●●●●●●"
                size="small"
                autoFocus
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="button-text">
              <div className="button-submit">
                <Button variant="contained" type="submit" className="button">
                  Login
                </Button>
              </div>
              <div className="modal-login">
                <ModalForgetPassword />
              </div>
              <div>
                <Link to="/signup" style={{textDecoration: "none"}}>
                  <p>You discover Meet World ? Create your account !</p>
                </Link>
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
