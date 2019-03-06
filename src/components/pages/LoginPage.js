import React from "react";
import LoginForm from "../forms/LoginForm";

const LoginPage = () => (
  <div>
    <h1>Login Page</h1>
    <LoginForm classes /> {/*Had to pass classes prop */}
  </div>
);

export default LoginPage;
