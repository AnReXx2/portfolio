import React from "react";
import styles from "./Stars.module.css";
import { PropsTypes } from "./types";

const Stars = ({ className }: PropsTypes) => {
  return (
    <div className={className}>
      <div className={styles.stars}></div>
      <div className={styles.star2}></div>
      <div className={styles.star3}></div>
    </div>
  );
};

export default Stars;
