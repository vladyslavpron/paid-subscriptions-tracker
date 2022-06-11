import React from "react";
import styles from "./ContentWrapper.module.css";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ContentWrapper;
