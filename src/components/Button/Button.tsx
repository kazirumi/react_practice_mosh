import React from "react";
import styles from "./Button.module.css";
interface Props {
  button_type?: "primary" | "danger" | "secondary";
  children: string;
  onClick: () => void;
}
const Button = ({ button_type = "primary", children, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        styles.buttonStyle,
        styles.buttonStyle1,
        styles.buttonStyle2,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
