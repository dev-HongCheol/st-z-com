import React from "react";

import ve from "./homepage.css";
import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import TweetList from "./_components/TweetList";
import HomeContextProvider from "./_components/Provider";
import SearchInput from "./_components/SearchInput";
import TrendList from "./_components/TrendList";
import RecommendFollowList from "./_components/RecommendFollowList";

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
            <RecommendFollowList />
          </section>
        </aside>
      </div>
    </HomeContextProvider>
  );
};

export default HomePage;
