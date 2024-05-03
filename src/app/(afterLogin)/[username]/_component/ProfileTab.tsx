"use client";
import Tab, { ITab } from "@/components/uis/tab/Tab";
import React from "react";

const ProfileTab = () => {
  const tabs: ITab[] = [
    {
      label: "게시물",
      value: "post",
    },
    {
      label: "답글",
      value: "reply",
    },
    {
      label: "하이라이트",
      value: "highlight",
    },
    {
      label: "아티클",
      value: "article",
    },
    {
      label: "미디어",
      value: "media",
    },
    {
      label: "마음에들어요",
      value: "like",
    },
  ];

  return (
    <Tab
      tabs={tabs}
      defaultSelectedTab={tabs[0]}
      // FIXME:
      handleSelectedTab={() => {}}
    />
  );
};

export default ProfileTab;
