import React from "react";

import { main, mainSection, sideSection } from "./homepage.css";
import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import TweetList from "./_components/TweetList";
import HomeContextProvider from "./_components/Provider";

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
        <div className={sideSection}>sideSection</div>
      </div>
    </HomeContextProvider>
  );
};

export default HomePage;
