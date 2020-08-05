import React from "react";
import { loginUrl } from "../utils/spotify";

import "./Login.css";

const logo = require("../assets/images/SP.jpg");

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="logo" />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
