import React from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const auth = true;

  const logoutHandler = () => {};

  return auth ? (
    <div className={styles.navbar}>
      <button className={styles.navbarItem} onClick={logoutHandler}>
        Log Out
      </button>
    </div>
  ) : (
    <div className={styles.navbar}>
      <Link to={RouteNames.LOGIN} className={styles.navbarItem}>
        Log In
      </Link>
      <Link to={RouteNames.REGISTER} className={styles.navbarItem}>
        Sign Up
      </Link>
    </div>
  );
};

export default Navbar;
