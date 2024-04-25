import React from "react";

import ve from "./homepage.css";
import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import TweetList from "./_components/TweetList";
import HomeContextProvider from "./_components/Provider";

const HomePage = () => {
  return (
    <HomeContextProvider>
      <HomeTopTab />
      <WriteForm />
      <TweetList />
    </HomeContextProvider>
  );
};

export default HomePage;
