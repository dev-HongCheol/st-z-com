"use client";

import React, { useMemo } from "react";
import Tweet from "./Tweet";

import type { Post } from "./TweetWrapper";
import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import getFollowingPosts from "../_lib/getFollowingPosts";

const FollowingList = () => {
  const { data } = useInfiniteQuery<
    Post[],
    object,
    InfiniteData<Post[]>,
    [string, string],
    number
  >({
    queryKey: ["tweet", "follows"],
    queryFn: getFollowingPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });

  const followings = useMemo(() => {
    if (data) return data.pages.flat();
  }, [data]);

  return followings?.map((tweet) => <Tweet post={tweet} key={tweet.postId} />);
};

export default FollowingList;
