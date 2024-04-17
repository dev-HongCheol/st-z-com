"use client";
import React from "react";
import {
  activeTab,
  activeTabText,
  homeTopTab,
  homeTopTabWrapper,
} from "./homeTopTab.css";

// FIXME: 화설화된 탭만 아래 표기되게 수정 필요
const HomeTopTab = () => {
  return (
    <div className={homeTopTabWrapper}>
      <div className={homeTopTab}>
        <div className={activeTabText}>추천</div>
        <div className={activeTab} />
      </div>
      <div className={homeTopTab}>
        <div className={activeTabText}>팔로우 중</div>
        <div className={activeTab} />
      </div>
    </div>
  );
};

export default HomeTopTab;
