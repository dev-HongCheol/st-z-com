"use client";
import React, { useContext } from "react";
import {
  activeTab,
  activeTabText,
  homeTopTab,
  homeTopTabWrapper,
} from "./homeTopTab.css";
import { HomeContext, HomeTopTabNames } from "./Provider";

// FIXME: 화설화된 탭만 아래 표기되게 수정 필요
const HomeTopTab = () => {
  const { tab, setTab } = useContext(HomeContext);
  const onSelectedTab = (tab: HomeTopTabNames) => {
    setTab(tab);
  };
  return (
    <div className={homeTopTabWrapper}>
      <div className={homeTopTab} onClick={() => onSelectedTab("recommended")}>
        <div className={activeTabText}>추천</div>
        <div className={tab === "recommended" ? activeTab : ""} />
      </div>
      <div className={homeTopTab} onClick={() => onSelectedTab("follow")}>
        <div className={activeTabText}>팔로우 중</div>
        <div className={tab === "follow" ? activeTab : ""} />
      </div>
    </div>
  );
};

export default HomeTopTab;
