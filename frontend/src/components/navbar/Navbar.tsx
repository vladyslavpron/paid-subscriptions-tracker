import React from "react";
import { Link } from "react-router-dom";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RouteNames } from "../../routes";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useTypedDispatch();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(AuthActionCreators.logout());
  };

  return isAuth ? (
    <div className={styles.navbar}>
      <div className={styles.navbarGreeting}>Hi, {user.name}</div>
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
