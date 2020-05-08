import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Login = () => {
  // création des états utilisés pour la connexion au compte
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = Cookies.get("token");

  const handleLoginSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://my-profile-site-by-lauraricchi.herokuapp.com/login",
        { email: email, password: password },
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Grid>
      <Helmet>
        <title>Se connecter à votre compte</title>
      </Helmet>
      <Grid>
        <div class="container-picture">
          <img
            alt="landscape"
            src="https://source.unsplash.com/user/erondu/1600x900"
            class="picture-landscape"
          ></img>
        </div>
        <div>
          <Typography component="h1" variant="h5">
            Bienvenue sur notre site People Meets World !
          </Typography>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <p>Adresse mail</p>
            <TextField
              id="input"
              variant="outlined"
              margin="normal"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
            <p>Mot de passe</p>
            <TextField
              id="input"
              variant="outlined"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <input value="Se connecter" type="submit" />

            <p>Vous n'avez pas de compte ?</p>

            <input
              onClick={() => history.push("/signup")}
              type="button"
              value="Créer un compte"
            />
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default Login;
