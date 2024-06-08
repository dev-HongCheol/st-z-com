import React, { type ReactNode } from "react";
import Header from "./_component/header/Header";
import ve from "./layout.css";
import Aside from "./_component/Aside";

type LayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};
const layout = ({ children, modal }: LayoutProps) => {
  return (
    <>
      <div className={ve.layoutWrapper}>
        <div className={ve.headerWrapper}>
          <Header />
        </div>
        <div className={ve.mainWrapper}>
          <main className={ve.main}>{children}</main>
          <Aside />
        </div>
        {modal}
      </div>
    </>
  );
};

export default layout;
