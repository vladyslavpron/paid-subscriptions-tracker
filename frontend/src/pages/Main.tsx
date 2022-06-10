import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.mainBlock}>
      <h1>Track your paid subscriptions!</h1>
      <button className={styles.mainButton}>Start</button>
    </div>
  );
}

export default Main;
