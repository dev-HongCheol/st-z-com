import React, { ReactNode } from "react";
import Header from "./_component/header/Header";
import { headerWrapper, layoutWrapper, mainWrapper } from "./layout.css";

type LayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};
const layout = ({ children, modal }: LayoutProps) => {
  return (
    <>
      <div className={layoutWrapper}>
        <div className={headerWrapper}>
          <div>
            <Header />
          </div>
        </div>
        <div className={mainWrapper}>{children}</div>
        {modal}
      </div>
    </>
  );
};

export default layout;
