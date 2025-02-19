import { ComponentProps, ReactNode } from "react";
import styles from "./Select.module.css";
import { SelectOption } from "../../type/select-option";
import { clsx } from "clsx";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
};

export default function Select({ options, ...otherProps }: Props): ReactNode {
  return (
    <div className={clsx(styles["select"])}>
      <select {...otherProps} name="" id="">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// sesson 7 1:08:40 select component personaly
//copy past Select.module.css
