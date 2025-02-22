import { ComponentProps, ReactElement, ReactNode } from "react";
import styles from "./TextInput.module.css";
import { clsx } from "clsx";

type Props = ComponentProps<"input"> & {
  // placeholder: string;
  suffixIcon: ReactElement;
};

export default function TextInput({
  suffixIcon,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <input type="text" {...otherProps} />
      <div className={styles.suffix}>{suffixIcon}</div>
    </div>
  );
}
