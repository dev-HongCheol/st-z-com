"use client";
import React from "react";
import ve from "./aside.css";
import SearchInput from "./SearchInput";
import TrendList from "./TrendList";
import RecommendFollowList from "./RecommendFollowList";
import { usePathname } from "next/navigation";

const Aside = () => {
  const pathname = usePathname();

  const isShowSearchInput = () => !["/search", "/explore"].includes(pathname);
  const isShowTrendList = () => !["/explore"].includes(pathname);
  return (
    <aside className={ve.aside}>
      {isShowSearchInput() && <SearchInput />}

      <section className={ve.sideSection}>
        {isShowTrendList() && <TrendList />}
        <RecommendFollowList />
      </section>
    </aside>
  );
};

export default Aside;
