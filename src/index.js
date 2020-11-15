import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./bootstrap.min.css";

import {
  Home,
  Activities,
  Login,
  MyRoutines,
  Routines,
  Header,
} from "./components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/routines">
          <h3>Routines </h3>
        </Route>
        <Route path="/my_routines">
          <h3>My Routines</h3>
        </Route>
        <Route path="/activities">
          <h3>Activities</h3>
        </Route>
        <Route path="/login">
          <h3>Login</h3>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
