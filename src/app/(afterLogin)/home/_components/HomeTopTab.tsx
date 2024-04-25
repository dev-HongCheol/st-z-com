"use client";
import React, { useContext } from "react";
import {
  activeTab,
  activeTabText,
  homeTopTab,
  homeTopTabWrapper,
} from "./homeTopTab.css";
import { HomeContext, HomeTopTabNames } from "./Provider";
import Tab, { ITab } from "@/components/uis/tab/Tab";

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
    <Tab
      tabs={tabs}
      defaultSelectedTab={tabs[0]}
      handleSelectedTab={onSelectedTab}
    />
  );
};

export default HomeTopTab;
