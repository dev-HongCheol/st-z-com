"use client";
import React, { useMemo } from "react";
import ve from "./aside.css";
import SearchInput from "./SearchInput";
import TrendList from "./TrendList";
import RecommendFollowList from "./RecommendFollowList";
import { usePathname } from "next/navigation";
import SearchFilter from "./SearchFilter";

const Aside = () => {
  const pathname = usePathname();

  const isShowSearchInput = useMemo(
    () => !["/search", "/explore"].includes(pathname),
    [pathname]
  );
  const isShowTrendList = useMemo(
    () => !["/explore"].includes(pathname),
    [pathname]
  );
  const isShowSearchFilter = useMemo(
    () => ["/search"].includes(pathname),
    [pathname]
  );

  return (
    <aside className={ve.aside}>
      {isShowSearchInput && <SearchInput />}
      {isShowSearchFilter && <SearchFilter />}
      <section className={ve.sideSection}>
        {isShowTrendList && <TrendList />}
        <RecommendFollowList />
      </section>
    </aside>
  );
};

export default Aside;
