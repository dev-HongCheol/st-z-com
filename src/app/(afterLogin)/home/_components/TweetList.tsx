"use client";

import React, { useEffect, useMemo } from "react";
import Tweet from "./Tweet";
import getPostRecommends from "../_lib/getPostRecommends";
import type { Post } from "./TweetWrapper";
import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

const TweetList = () => {
  const { data } = useInfiniteQuery<
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

  const tweets = useMemo(() => {
    if (data) {
      return data.pages.flat();
    }
  }, [data]);

  console.log("🚀 _ TweetList _ tweets:", tweets);
  return tweets?.map((tweet) => <Tweet post={tweet} key={tweet.postId} />);
};

export default TweetList;
