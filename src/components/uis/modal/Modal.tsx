import React, { ReactNode } from "react";
import { modal, modalWrapper } from "./modal.css";

type ModalProps = {
  children: ReactNode;
  className?: string;
};

const Modal = ({ children, className = "" }: ModalProps) => {
  return (
    <div className={modal}>
      <div className={`${modalWrapper} ${className ? className : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
