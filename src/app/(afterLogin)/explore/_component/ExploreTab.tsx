"use client";
import Tab, { ITab } from "@/components/uis/tab/Tab";
import React from "react";
import ve from "./exploreTab.css";

const tabs: ITab[] = [
  {
    label: "For you",
    value: "foryou",
  },
  {
    label: "Trending",
    value: "trending",
  },
  {
    label: "News",
    value: "news",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
];

const ExploreTab = () => {
  return (
    <div className={ve.wrapper}>
      <Tab
        tabs={tabs}
        defaultSelectedTab={tabs[0]}
        handleSelectedTab={(tab) => {}}
      />
    </div>
  );
};

export default ExploreTab;
