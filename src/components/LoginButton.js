import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "../assets/css/LoginButton.css";

const LoginButton = () => {
  const history = useHistory();
  return (
    <div className="loginButton">
      <Button
        className="button-login"
        style={{color: "#fff"}}
        onClick={() => {
          history.push("/login");
        }}
      >
        Connexion
      </Button>
    </div>
  );
};

export default LoginButton;
