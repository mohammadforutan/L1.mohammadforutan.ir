import { ReactNode } from "react";
import styles from "./Result.module.css";

export default function Result(): ReactNode {
  return (
    <div className={styles.result}>
      <ul className="result">
        <li>NOTE #1</li>
        <li>NOTE #2</li>
        <li>NOTE #3</li>
      </ul>
    </div>
  );
}
