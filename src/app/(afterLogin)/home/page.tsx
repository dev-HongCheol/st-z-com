import React from "react";

import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import TweetList from "./_components/TweetList";
import HomeContextProvider from "./_components/Provider";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import getPostRecommends from "./_lib/getPostRecommends";

const HomePage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["tweet", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HomeContextProvider>
      <HomeTopTab />
      <WriteForm />
      <HydrationBoundary state={dehydratedState}>
        <TweetList />
      </HydrationBoundary>
    </HomeContextProvider>
  );
};

export default HomePage;
