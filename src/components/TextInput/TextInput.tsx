import { ReactElement, ReactNode } from "react";
import styles from "./TextInput.module.css";

type Props = {
  placeholder: string;
  suffixIcon: ReactElement;
};

export default function TextInput({
  placeholder,
  suffixIcon,
}: Props): ReactNode {
  return (
    <div className={styles["text-input"]}>
      <input type="text" placeholder={placeholder} />
      <div className={styles.suffix}>{suffixIcon}</div>
    </div>
  );
}
