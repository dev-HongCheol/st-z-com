import React, { ReactNode } from "react";
import Header from "./_component/header/Header";
import { headerWrapper, layoutWrapper, mainWrapper } from "./layout.css";

type LayoutProps = {
  children: ReactNode;
};
const layout = ({ children }: LayoutProps) => {
  return (
    <div className={layoutWrapper}>
      <div className={headerWrapper}>
        <div>
          <Header />
        </div>
      </div>
      <div className={mainWrapper}>{children}</div>
    </div>
  );
};

export default layout;
