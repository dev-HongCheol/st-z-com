"use client";
import React, { useContext } from "react";

import { HomeContext, HomeTopTabNames } from "./Provider";
import Tab, { ITab } from "@/components/uis/tab/Tab";
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
// FIXME: 화설화된 탭만 아래 표기되게 수정 필요
const HomeTopTab = () => {
  const { tab, setTab } = useContext(HomeContext);
  const onSelectedTab = (tab: ITab) => {
    setTab(tab.label as HomeTopTabNames);
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
