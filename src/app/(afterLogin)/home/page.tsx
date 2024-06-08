import React, { Suspense } from "react";

import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import HomeContextProvider from "./_components/Provider";
import TabDividerSuspense from "./_components/TabDividerSuspense";
import Loading from "../loading";

const HomePage = async () => {
  return (
    <HomeContextProvider>
      <HomeTopTab />
      <WriteForm />
      <Suspense fallback={<Loading />}>
        <TabDividerSuspense />
      </Suspense>
    </HomeContextProvider>
  );
};

export default HomePage;
