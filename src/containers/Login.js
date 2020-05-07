import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

const Login = () => {
  // création des états utilisés pour la connexion au compte
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("https://localhost:3001/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Se connecter à votre compte</title>
      </Helmet>
      <div>
        <p>Connexion</p>
        <form onSubmit={handleLoginSubmit}>
          <p>Adresse mail</p>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <p>Mot de passe</p>
          <input
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
    </div>
  );
};
export default Login;
