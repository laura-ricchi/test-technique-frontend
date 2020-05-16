import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Common.css";
import "../assets/css/SignUp.css";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// page de création d'un nouveau compte

const SignUp = ({ onLogin }) => {
  // création des états utilisées pour le formulaire de connexion
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const MyButton = styled(Button)({
    background: "linear-gradient(45deg, #4183d7 30%, #44b0ea 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
    color: "white",
    width: 170,
    height: 44,
    padding: "0 30px",
  });

  // création d'une fonction pour empécher le navigateur de changer de page
  const handleSignupSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!username || !email || !password || !confirmPassword) {
        alert("Veuillez remplir tous les champs");
      } else if (password !== confirmPassword) {
        alert("Vos mots de passe ne sont pas identiques");
      } else {
        const response = await axios.post("http://localhost:3001/signup", {
          email: email,
          username: username,
          password: password,
        });
        console.log(response.data);
        if (response.data.token) {
          onLogin(response.data.token, response.data.username);

          history.push("/home");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Grid className="container">
      <Helmet>
        <title>S'inscrire</title>
      </Helmet>
      <Grid className="form-signup">
        <Grid className="form-to-register">
          <h2>S'inscrire</h2>
          <form onSubmit={handleSignupSubmit}>
            <p>Votre nom d'utilisateur</p>
            <TextField
              className="input"
              variant="outlined"
              type="text"
              size="small"
              label="Nom d'utilisateur "
              autoFocus
              onChange={(event) => setUsername(event.target.value)}
            />
            <p>Votre email</p>
            <TextField
              className="input"
              variant="outlined"
              size="small"
              type="text"
              label="Email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <p>Votre mot de passe</p>
            <TextField
              className="input"
              variant="outlined"
              size="small"
              type="password"
              autoFocus
              placeholder="●●●●●●●●"
              onChange={(event) => setPassword(event.target.value)}
            />
            <p>Confirmez votre mot de passe</p>
            <TextField
              className="input"
              variant="outlined"
              size="small"
              type="password"
              autoFocus
              placeholder="●●●●●●●●"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <div className="button-signup">
              <MyButton variant="contained" type="submit">
                VALIDER
              </MyButton>
            </div>
            <Link to="/login" className="account">
              Se connecter à votre compte
            </Link>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SignUp;
