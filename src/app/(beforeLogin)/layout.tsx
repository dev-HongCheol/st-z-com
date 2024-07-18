import React, { type ReactNode } from "react";

type BeforeLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const BeforeLayout = ({ children, modal }: BeforeLayoutProps) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default BeforeLayout;
