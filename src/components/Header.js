import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../bootstrap.min.css";

const Header = (props) => {
  const { user } = props;
  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Fitness Trac.kr
      </a>
     
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavLink
            exact to="/"
            className="nav-link"
            activeClassName="nav-link active"
          >
            Home
          </NavLink>
          <NavLink
            to="/routines"
            className="nav-link"
            activeClassName="nav-link active"
          >
            Routines
          </NavLink>
          {user ? (
            <NavLink
              to="/my_routines"
              className="nav-link"
              activeClassName="nav-link active"
            >
              My Routines
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            to="/activities"
            className="nav-link"
            activeClassName="nav-link active"
          >
            Activities
          </NavLink>
          {!user ? (
            <>
            <NavLink
              to="/login"
              className="nav-link my-2 my-sm-0"
              activeClassName="nav-link active"
            >
              Login/Register
            </NavLink>
            </>
          ) : (
            ""
          )}
          {user ? (
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="nav-link active"
            >
              Log out
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
