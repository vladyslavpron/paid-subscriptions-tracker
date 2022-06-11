import React, { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.css";

interface Props {
  children?: React.ReactNode;
  label?: string;
  input?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ children, label, input, required, onChange }: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        className={styles.input}
        value={input}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      ></input>
    </div>
  );
};

export default Input;
