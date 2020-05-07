import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

// page de création d'un nouveau compte

const SignUp = () => {
  // création des états utilisées pour le formulaire de connexion
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  // création d'une fonction pour empécher le navigateur de changer de page

  const handleSignupSubmit = async (event) => {
    try {
      event.preventDefault();

      if (password !== confirmPassword) {
        alert("Vos mots de passe ne sont pas identiques");
      } else {
        const response = await axios.post("https://localhost:3001/signup", {
          email: email,
          username: username,
          password: password,
        });
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>S'inscrire</title>
      </Helmet>
      <div>
        <p>Créer votre compte</p>
        <form onSubmit={handleSignupSubmit}>
          <p>Votre nom d'utilisateur</p>
          <input
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
          <p>Votre email</p>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <p>Votre mot de passe</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <p>Confirmez votre mot de passe</p>
          <input
            type="password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <div>
            <input value="Créer mon compte" type="submit" />
          </div>
          <p>Vous avez un compte ?</p>
          <input
            onClick={() => history.push("/login")}
            type="button"
            value="Se connecter"
          />
        </form>
      </div>
    </div>
  );
};
export default SignUp;
