import { ReactElement } from "react";
import Button from "../Button/Button";
import styles from "./Create.module.css";
import MingcuteAddFill from "../../icons/MingcuteAddFill";

export default function Create(): ReactElement {
  return (
    <div className={styles.create}>
      <Button shape="circle" size="large">
        <MingcuteAddFill />
      </Button>
    </div>
  );
}
