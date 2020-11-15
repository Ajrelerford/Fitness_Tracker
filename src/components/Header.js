import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../bootstrap.min.css";

const Header = (props) => {
  const {  user, setUser, token, setToken } = props;
  useEffect(()=> {}, [user])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Fitness Trac.kr
      </a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            exact
            to="/"
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
          {user.username ? (
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
          {!user.username ? (
            <>
              <NavLink
                to="/login"
                className="nav-link my-2 my-sm-0"
                activeClassName="nav-link active"
              >
                Login
              </NavLink>
            </>
          ) : (
            ""
          )}
          {!user.username ? (
            <>
              <NavLink
                to="/register"
                className="nav-link my-2 my-sm-0"
                activeClassName="nav-link active"
              >
                Register
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user.username ? (
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="nav-link active"
              onClick={() => {
                setToken("");
                setUser({});
              }}
            >
              Log out
            </NavLink>
          ) : (
            ""
          )}
          {user.username ? (
            <h3 className="text-info">User: {user.username}</h3>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
