"use client";

import React from "react";
import Tweet from "./Tweet";
import getPostRecommends from "../_lib/getPostRecommends";
import type { Post } from "./TweetWrapper";
import { useQuery } from "@tanstack/react-query";

const TweetList = () => {
  const { data: tweets } = useQuery<Post[]>({
    queryKey: ["tweet", "recommends"],
    queryFn: getPostRecommends,
  });

  return tweets?.map((tweet) => (
    <Tweet post={tweet} key={tweet.postId} isNoneBorder />
  ));
};

export default TweetList;
