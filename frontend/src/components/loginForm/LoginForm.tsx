import React, { useState } from "react";

import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import Button from "../button/Button";
import Input from "../input/Input";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useTypedDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(AuthActionCreators.login(email, password));
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={(event) => formSubmitHandler(event)}
    >
      {error && <div className={styles.error}>{error}</div>}
      <Input
        label="Email: "
        input={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <Input
        label="Password: "
        input={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></Input>

      <Button>Login</Button>
      {isLoading && <LoadingSpinner />}
    </form>
  );
};

export default LoginForm;
