import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstPage from "./containers/FirstPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Cookies from "js-cookie";

const App = () => {
  // création d'état et accéder et lecture de la valeur du cookie "userKey", "userToken" et userEmail
  const [keyTest, setKeyTest] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const loginUser = (privateKey, newToken, newEmail) => {
    setKeyTest(privateKey);
    setToken(newToken);
    setEmail(newEmail);
    Cookies.set("userEmail", newEmail);
  };
  return (
    <Router>
      <Header setKeyTest={setKeyTest} token={token} setToken={setToken} />
      <Switch>
        <Route exact path="/">
          <FirstPage />
        </Route>
        <Route path="/home">
          <Home testKey={keyTest} token={token} email={email} />
        </Route>
        <Route path="/login">
          <Login loginUser={loginUser} />
        </Route>
        <Route path="/signup">
          <SignUp loginUser={loginUser} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
