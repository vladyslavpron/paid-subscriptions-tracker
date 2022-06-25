import React, { Dispatch, SetStateAction } from "react";
import styles from "./Modal.module.css";

interface props {
  children?: React.ReactNode;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, active, setActive }: props) => {
  console.log([styles.modal, styles.active].join(" "));

  return (
    <div
      className={
        active ? [styles.modal, styles.active].join(" ") : styles.modal
      }
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
