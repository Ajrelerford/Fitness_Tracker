import React, { useState } from "react";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";
import axios from "axios";
import { callApi } from "../api";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const { token, setToken, setUser, status, setStatus } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("token: ", token);
  const history = useHistory();
  console.log("status", status);

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      console.log(username);
      const response = await axios.post(`${BASE_URL}/users/login`, 
        {'username': username, 'password': password },
      );
      const { data } = response;
      console.log("login result: ", data);
      if (data.error){
          setStatus(data)
      }
      if (data.user) {
        setUsername("");
        setPassword("");
        console.log("token: ", data.token);
        setToken(data.token);
        const user = await callApi({
          token: data.token,
          url: "/users/me",
        });
        console.log("user", user);
        if (user && user.username) {
          setUser(user);
        }
        // redirect upon login
        history.push("/routines");
      } else {
        console.error("oops, didnt work");
      }
    } catch (error) {
      console.error(error);
      console.log("status: ", status);
      console.log(error.message);
      setStatus({ error: error.message });
    }
  };

  return (
    <>
    <h1>Login</h1> 
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            className="form-control"
            id="Username"
            value={username} 
            onChange={(e) => {setUsername(e.target.value)}}
            
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {status.error ? 
        <div class="alert alert-danger" role="alert">
        {`${status.error}`}
        </div>: ''}
    </>
  );
};
export default Login;