import React from "react";
import SearchInput from "../_component/SearchInput";
import ExploreTab from "./_component/ExploreTab";
import TrendForMe from "./_component/TrendForMe";
import ve from "./explorePage.css";

const ExplorePage = () => {
  return (
    <div>
      <div className={ve.wrapper}>
        <SearchInput />
        <ExploreTab />
      </div>

      <TrendForMe />
    </div>
  );
};

export default ExplorePage;
