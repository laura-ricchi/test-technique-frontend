import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import "../App.css";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Login = () => {
  // création des états utilisés pour la connexion au compte
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = Cookies.get("token");

  const MyButton = styled(Button)({
    background: "linear-gradient(45deg, #4183d7 30%, #44b0ea 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  });

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
    <div className="container-login">
      <Helmet>
        <title>Bienvenue sur People Meets World</title>
      </Helmet>
      <div className="form">
        <div className="form-login">
          <form onSubmit={handleLoginSubmit}>
            <Typography component="h2">Connexion à votre compte</Typography>
            <p>Votre email</p>
            <TextField
              className="input"
              type="text"
              variant="outlined"
              label="Votre email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <p>Votre mot de passe</p>
            <TextField
              className="input"
              variant="outlined"
              type="password"
              label="Votre mot de passe"
              autoFocus
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="button-login">
              <MyButton value="Se connecter" type="submit" />
            </div>
            <div>
              <span>Vous n'avez pas de compte ?</span>
            </div>

            <MyButton
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
