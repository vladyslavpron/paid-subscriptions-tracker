import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/registerForm/RegisterForm";
import { RouteNames } from "../routes";
import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.registerBlock}>
      <RegisterForm />
      <Link className={styles.linkToLogin} to={RouteNames.LOGIN}>
        I already have an account
      </Link>
    </div>
  );
}

export default Register;
