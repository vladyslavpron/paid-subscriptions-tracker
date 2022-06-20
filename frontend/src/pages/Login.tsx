import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../components/loginForm/LoginForm";
import { RouteNames } from "../routes";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginBlock}>
      <LoginForm />
      <Link className={styles.linkToRegister} to={RouteNames.REGISTER}>
        I haven't registered an account yet
      </Link>
    </div>
  );
}

export default Login;
