import React, { ReactNode } from "react";
import Header from "./_component/header/Header";
import ve from "./layout.css";
import SearchInput from "./_component/SearchInput";
import TrendList from "./_component/TrendList";
import RecommendFollowList from "./_component/RecommendFollowList";

type LayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};
const layout = ({ children, modal }: LayoutProps) => {
  return (
    <>
      <div className={ve.layoutWrapper}>
        <div className={ve.headerWrapper}>
          <div>
            <Header />
          </div>
        </div>
        <div className={ve.mainWrapper}>
          {children}
          <aside className={ve.aside}>
            <SearchInput />
            <section className={ve.sideSection}>
              <TrendList />
              <RecommendFollowList />
            </section>
          </aside>
        </div>
        {modal}
      </div>
    </>
  );
};

export default layout;
