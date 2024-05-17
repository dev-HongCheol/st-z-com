import React, { useState } from "react";
import ve from "./tab.css";

export interface ITab {
  label: string;
  value: string;
  onClick?: () => void;
}

type TabProps = {
  tabs: ITab[];
  defaultSelectedTab: ITab;
  handleSelectedTab: (tab: ITab) => void;
};
const Tab = ({ defaultSelectedTab, tabs, handleSelectedTab }: TabProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultSelectedTab ? defaultSelectedTab : tabs[0]
  );
  const onSelectedTab = (tab: ITab) => {
    setActiveTab(tab);
    handleSelectedTab && handleSelectedTab(tab);
  };
  return (
    <div className={ve.tabWrapper}>
      {tabs.map((tab) => (
        <div
          className={ve.tab}
          onClick={() => {
            onSelectedTab(tab);
            tab.onClick && tab.onClick();
          }}
          key={tab.value}
        >
          <div
            className={`${ve.tabText} ${
              tab.value === activeTab.value ? ve.activeTabText : ""
            }`}
          >
            {tab.label}
          </div>
          <div className={tab.value === activeTab.value ? ve.activeTab : ""} />
        </div>
      ))}
    </div>
  );
};

export default Tab;
