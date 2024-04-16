import React, { ReactNode } from "react";
import { modal, modalWrapper } from "./modal.css";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={modal}>
      <div className={modalWrapper}>{children}</div>
    </div>
  );
};

export default Modal;
