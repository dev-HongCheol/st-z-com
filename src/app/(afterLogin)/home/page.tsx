import React from "react";

import HomeTopTab from "./_components/HomeTopTab";
import WriteForm from "./_components/WriteForm";
import HomeContextProvider from "./_components/Provider";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import getPostRecommends from "./_lib/getPostRecommends";
import TabDivider from "./_components/TabDivider";

const HomePage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["tweet", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HomeContextProvider>
      <HomeTopTab />
      <WriteForm />
      <HydrationBoundary state={dehydratedState}>
        <TabDivider />
      </HydrationBoundary>
    </HomeContextProvider>
  );
};

export default HomePage;
