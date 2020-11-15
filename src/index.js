import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './bootstrap.min.css'

import {
  Home,
  Activities,
  Login,
  MyRoutines,
  Routines
} from './components'

const App = (props) => {
  return (
    <div id="app">
      <h1>Hello, World</h1>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  
  document.getElementById('app')
);