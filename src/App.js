import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
