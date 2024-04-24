import React from "react";

import { main, mainSection, sideSection } from "./homepage.css";
import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import TweetList from "./_components/TweetList";
import HomeContextProvider from "./_components/Provider";
import SearchInput from "./_components/SearchInput";
import Trend from "./_components/Trend";
import RecommendFollow from "./_components/RecommendFollow";

const HomePage = () => {
  return (
    <HomeContextProvider>
      <div className={main}>
        {/* main content */}
        <div className={mainSection}>
          <HomeTopTab />
          <WriteForm />
          <TweetList />
        </div>
        <div className={sideSection}>
          <SearchInput />
          <Trend />
          <RecommendFollow />
        </div>
      </div>
    </HomeContextProvider>
  );
};

export default HomePage;
