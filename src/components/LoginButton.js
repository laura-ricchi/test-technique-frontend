import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const LoginButton = () => {
  const history = useHistory();
  return (
    <div>
      <Button
      className="button"
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
