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
  getCurrentUser,
  getCurrentToken
} from './auth';

const App = () => {
  const [token, setToken] = useState(getCurrentToken()||'');
  const [user, setUser] = useState(getCurrentUser()||{});
  const [status, setStatus] = useState({});

  return (
    <Router>
      <Header user={user} setUser={setUser} token={token} setToken={setToken} />
      
      <Switch>
        <Route exact path="/routines">
          <Routines token={token} user={user}/>
        </Route>
        <Route path="/my_routines">
          <MyRoutines token= {token} user={user} />
          
        </Route>
        <Route path="/activities">
          <Activities token={token}/>
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
