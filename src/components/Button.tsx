import React from "react";
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
      className={`btn btn-${button_type}`}
    >
      {children}
    </button>
  );
};

export default Button;
