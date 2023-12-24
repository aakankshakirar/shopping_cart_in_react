import React from "react";
import styles from "../UI/Container.module.css";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
