"use client";
import React, { useContext } from "react";
import { HomeContext, type HomeTopTabNames } from "./Provider";
import Tab, { type ITab } from "@/components/uis/tab/Tab";
import ve from "./homeTopTab.css";

const tabs: ITab[] = [
  {
    label: "추천",
    value: "recommended",
  },
  {
    label: "팔로우 중",
    value: "follow",
  },
];
const HomeTopTab = () => {
  const { setTab } = useContext(HomeContext);
  const onSelectedTab = (tab: ITab) => {
    setTab(tab.value as HomeTopTabNames);
  };
  return (
    <div className={ve.homeTopTabWrapper}>
      <Tab
        tabs={tabs}
        defaultSelectedTab={tabs[0]}
        handleSelectedTab={onSelectedTab}
      />
    </div>
  );
};

export default HomeTopTab;
