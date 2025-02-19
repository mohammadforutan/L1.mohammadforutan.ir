import {ReactNode} from "react";
import styles from "./Header.module.css"

export default function Header():ReactNode {
    return (
        <div className={styles.header}>
            <h1>TODO LIST</h1>
        </div>

    );
}
