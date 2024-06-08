import React from "react";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import getPostRecommends from "../_lib/getPostRecommends";
import TabDivider from "./TabDivider";

const TabDividerSuspense = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["tweet", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <TabDivider />
    </HydrationBoundary>
  );
};

export default TabDividerSuspense;
