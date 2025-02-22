import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";
import { clsx } from "clsx";

type Variant = "solid" | "outline" | "ghost";
type Size = "small" | "medium" | "large";
type Shape = "rectangle" | "square" | "circle";
type Color = "primary" | "danger";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  color?: Color;
};

export default function Button({
  variant = "solid",
  size = "medium",
  shape = "rectangle",
  color = "primary",
  children,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[color],
        styles[shape],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
