import React from "react";
import { input, inputWrapper } from "./Input.ts.css";

type InputProps = {
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  label?: string;
};
const Input = ({
  id,
  type = "text",
  name,
  placeholder = "",
  label,
}: InputProps) => {
  return (
    <div className={inputWrapper}>
      <label htmlFor={id}>
        {label}
        {label && <br />}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={input}
        />
      </label>
    </div>
  );
};

export default Input;
