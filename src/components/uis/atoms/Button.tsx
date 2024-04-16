import React, { HTMLAttributes, ReactNode } from "react";
import { button } from "./Button.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit";
  padding?: "none" | "rounded";
  className?: string;
}

const Button = ({
  children,
  variant = "contained",
  size = "medium",
  type = "button",
  padding = "none",
  className = "",
  ...props
}: ButtonProps) => {
  const buttonClass = button({
    variant: variant,
    size,
    padding,
  });

  return (
    <button type={type} className={`${className} ${buttonClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
