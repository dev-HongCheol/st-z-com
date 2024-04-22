import React from "react";

import { main, mainSection, sideSection } from "./homepage.css";
import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import Tweet from "./_components/Tweet";

const HomePage = () => {
  return (
    <div className={main}>
      {/* main content */}
      <div className={mainSection}>
        <HomeTopTab />
        <WriteForm />
        <Tweet />
      </div>
      <div className={sideSection}>sideSection</div>
    </div>
  );
};

export default HomePage;
