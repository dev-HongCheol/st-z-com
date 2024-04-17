import React from "react";

import { main, mainSection, sideSection } from "./homepage.css";
import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";

const HomePage = () => {
  return (
    <div className={main}>
      {/* main content */}
      <div className={mainSection}>
        <HomeTopTab />
        <WriteForm />
      </div>
      <div className={sideSection}>sideSection</div>
    </div>
  );
};

export default HomePage;
