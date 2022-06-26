import React, { useState } from "react";
import Input from "../input/Input";
import styles from "./RegisterForm.module.css";
import Button from "../button/Button";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { IUser } from "../../types/IUser";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const RegisterForm = () => {
  const dispatch = useTypedDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      dispatch(AuthActionCreators.setError("passwords doesn't match"));
    } else {
      dispatch(AuthActionCreators.register({ name, email, password } as IUser));
    }
  };

  return (
    <form
      className={styles.registerForm}
      onSubmit={(event) => formSubmitHandler(event)}
    >
      {error && <div className={styles.error}>{error}</div>}

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
      {isLoading && <LoadingSpinner />}
    </form>
  );
};

export default RegisterForm;
