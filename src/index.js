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
  Register,
} from "./components";

import {
  getCurrentUser
} from './auth';

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [status, setStatus] = useState({});

  return (
    <Router>
      <Header user={user} setUser={setUser} token={token} setToken={setToken} />
      
      <Switch>
        <Route exact path="/routines">
          <Routines />
        </Route>
        <Route path="/my_routines">
          <h3>My Routines</h3>
          
        </Route>
        <Route path="/activities">
          <Activities />
        </Route>
        <Route path="/login">
          <Login token={token} setToken={setToken} status= {status}  setStatus = {setStatus} setUser={setUser} />
        </Route>
        <Route path="/register">
          <Register token={token} setToken={setToken} status= {status}  setStatus = {setStatus} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
