import React, { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Props {
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
