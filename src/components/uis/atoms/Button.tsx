import React, { HTMLAttributes, ReactNode } from "react";
import { button } from "./Button.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "text";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit";
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={button({
        color: variant,
        size,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
