"use client";

import React, { useEffect, useMemo } from "react";
import Tweet from "./Tweet";
import getPostRecommends from "../_lib/getPostRecommends";
import type { Post } from "./TweetWrapper";
import {
  type InfiniteData,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Loading from "../../loading";
const TweetList = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useSuspenseInfiniteQuery<
      Post[],
      object,
      InfiniteData<Post[]>,
      [string, string],
      number
    >({
      queryKey: ["tweet", "recommends"],
      queryFn: getPostRecommends,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  const tweets = useMemo(() => {
    if (data) {
      return data.pages.flat();
    }
  }, [data]);

  return (
    <>
      {tweets?.map((tweet) => (
        <Tweet post={tweet} key={tweet.postId} />
      ))}
      {isFetching && <Loading />}
      <div ref={ref} />
    </>
  );
};

export default TweetList;
