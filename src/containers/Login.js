import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  // création des états utilisés pour la connexion au compte
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = Cookies.get("token");

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
    <div className="container">
      <Helmet>
        <title>Bienvenue sur People Meets World</title>
      </Helmet>
      <div className="form">
        <div className="form-login">
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
            <Link className="account">Mot de passe oublié ?</Link>
            <Link
              onClick={() => history.push("/signup")}
              value="Créer un compte"
              className="account"
            >
              Vous découvrez People Meets People créez un compte !
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
