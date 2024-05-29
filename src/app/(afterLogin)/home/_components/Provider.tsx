"use client";

import React, { type ReactNode, createContext, useState } from "react";

export type HomeTopTabNames = "recommended" | "follow";

interface HomeContext {
  tab: HomeTopTabNames;
  setTab: (tab: "recommended" | "follow") => void;
}
const initHomeContext: HomeContext = {
  tab: "recommended",
  setTab: (tab: "recommended" | "follow") => {},
};
export const HomeContext = createContext<HomeContext>(initHomeContext);

const HomeContextProvider = ({ children }: { children: ReactNode }) => {
  const [tab, setTab] = useState<HomeTopTabNames>("recommended");
  //   const setSelectedTab = useCallback(() => setTab, [tab]);

  return (
    <HomeContext.Provider value={{ tab, setTab }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
