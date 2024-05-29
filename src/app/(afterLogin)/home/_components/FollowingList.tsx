"use client";

import React from "react";
import Tweet from "./Tweet";
import getPostRecommends from "../_lib/getPostRecommends";
import type { Post } from "./TweetWrapper";
import { useQuery } from "@tanstack/react-query";

const FollowingList = () => {
  const { data: followings, error } = useQuery<Post[]>({
    queryKey: ["tweet", "follows"],
    queryFn: getPostRecommends,
  });

  return followings?.map((tweet) => <Tweet post={tweet} key={tweet.postId} />);
};

export default FollowingList;
