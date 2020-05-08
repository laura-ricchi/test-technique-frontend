import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import "../App.css";
import TextField from "@material-ui/core/TextField";
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
    <div class="container">
      <Helmet>
        <title>Bienvenue sur People Meets World</title>
      </Helmet>
      <div className="container-login">
        <div className="container-picture">
          <img
            alt="landscape"
            src="https://source.unsplash.com/random"
            class="picture-landscape"
          ></img>
        </div>
        <div className="form">
          <Typography component="h1" variant="h5">
            Bienvenue sur notre site People Meets World !
          </Typography>
          <Typography component="h2">Connexion</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              id="input"
              type="text"
              variant="outlined"
              margin="normal"
              label="Votre email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="input"
              variant="outlined"
              type="password"
              label="Votre mot de passe"
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
      </div>
    </div>
  );
};
export default Login;
