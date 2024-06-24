import React, { type ReactNode } from "react";
import Header from "./_component/header/Header";
import ve from "./layout.css";
import Aside from "./_component/Aside";
import type { Metadata } from "next";

type LayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};
export const metadata: Metadata = {
  title: "x.무슨일이 일어나고 있나요?(afterLogin)",
  description: "HOME",
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
