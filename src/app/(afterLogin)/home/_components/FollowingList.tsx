"use client";

import React from "react";
import Tweet from "./Tweet";

import type { Post } from "./TweetWrapper";
import { useSuspenseQuery } from "@tanstack/react-query";
import getFollowingPosts from "../_lib/getFollowingPosts";

const FollowingList = () => {
  const { data: followings } = useSuspenseQuery<Post[]>({
    queryKey: ["tweet", "follows"],
    queryFn: getFollowingPosts,
  });

  return followings?.map((tweet) => <Tweet post={tweet} key={tweet.postId} />);
};

export default FollowingList;
