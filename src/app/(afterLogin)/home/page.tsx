import React, { Suspense } from "react";

import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import HomeContextProvider from "./_components/Provider";
import TabDividerSuspense from "./_components/TabDividerSuspense";
import Loading from "../loading";
import { auth } from "@/auth";

const HomePage = async () => {
  const session = await auth();

  return (
    <HomeContextProvider>
      <HomeTopTab />
      {session && <WriteForm user={session.user} />}

      <Suspense fallback={<Loading />}>
        <TabDividerSuspense />
      </Suspense>
    </HomeContextProvider>
  );
};

export default HomePage;
