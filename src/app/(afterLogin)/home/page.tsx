import React from "react";

import ve from "./homepage.css";
import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import TweetList from "./_components/TweetList";
import HomeContextProvider from "./_components/Provider";
import SearchInput from "./_components/SearchInput";
import RecommendFollow from "./_components/RecommendFollow";
import TrendList from "./_components/TrendList";

const HomePage = () => {
  return (
    <HomeContextProvider>
      <div className={ve.main}>
        {/* main content */}
        <main className={ve.mainSection}>
          <HomeTopTab />
          <WriteForm />
          <TweetList />
        </main>
        <aside className={ve.aside}>
          <SearchInput />
          <section className={ve.sideSection}>
            <TrendList />
            <RecommendFollow />
          </section>
        </aside>
      </div>
    </HomeContextProvider>
  );
};

export default HomePage;
