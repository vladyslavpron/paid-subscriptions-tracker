import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { RouteNames } from "../routes";
import styles from "./Main.module.css";

function Main() {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate(RouteNames.REGISTER);
  };
  return (
    <div className={styles.mainBlock}>
      <h1>Track your paid subscriptions!</h1>
      <Button onClick={navigateToRegister}>Start</Button>
    </div>
  );
}

export default Main;
