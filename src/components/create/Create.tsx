import { ReactElement, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Create.module.css";
import MingcuteAddFill from "../../icons/MingcuteAddFill";
import TextInput from "../TextInput/TextInput";

export default function Create(): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHndler = (): void => {
    dialogRef.current?.showModal();
  };

  const cancelButtonClickHandler = (): void => {
    dialogRef.current?.close();
  };

  return (
    <div className={styles.create}>
      <Button shape="circle" size="large" onClick={addButtonClickHndler}>
        <MingcuteAddFill />
      </Button>
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>Create a new Dream</div>
          <TextInput placeholder="Inpute your note..." />
          <div className={styles.actions}>
            <Button
              type="button"
              variant="outline"
              onClick={cancelButtonClickHandler}
            >
              CANCEL
            </Button>
            <Button>APPLY</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
