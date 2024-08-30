import styles from "./Lines.module.scss";
import { PropsTypes } from "./types";

const Lines = ({ className }: PropsTypes) => {
  return (
    <div className={`${className} ${styles.lines}`}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Lines;
