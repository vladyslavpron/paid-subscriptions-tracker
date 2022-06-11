import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { RouteNames } from "../routes";
import styles from "./Register.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submited!");
  };

  return (
    <div className={styles.registerBlock}>
      <form
        className={styles.registerForm}
        onSubmit={(event) => formSubmitHandler(event)}
      >
        <Input
          label="Name: "
          input={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Email: "
          input={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <Input
          label="Password: "
          input={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        ></Input>
        <Input
          label="Confirm password: "
          input={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          required
        ></Input>

        <Button>Register</Button>
      </form>
      <Link className={styles.linkToLogin} to={RouteNames.LOGIN}>
        I already have an account
      </Link>
    </div>
  );
}

export default Register;
