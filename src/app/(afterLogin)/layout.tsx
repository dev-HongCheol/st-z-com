import React, { ReactNode } from "react";
import Header from "./_components/Header/Header";
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
      <div className={mainWrapper}>
        <div>컨텐츠</div>
      </div>
      {/* {children} */}
    </div>
  );
};

export default layout;
