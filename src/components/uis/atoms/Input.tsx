import React, { ComponentPropsWithoutRef, Ref } from "react";
import { input, inputWrapper } from "./Input.ts.css";

type InputProps = {
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  label?: string;
};
const Input = React.forwardRef(
  (
    {
      id,
      type = "text",
      name,
      placeholder = "",
      label,
    }: InputProps & ComponentPropsWithoutRef<"input">,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={inputWrapper}>
        <label htmlFor={id}>
          {label}
          {label && <br />}
          <input
            ref={ref}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className={input}
          />
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
