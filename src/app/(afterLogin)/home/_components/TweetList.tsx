"use client";

import React from "react";
import Tweet from "./Tweet";
import getPostRecommends from "../_lib/getPostRecommends";
import { Post } from "./TweetWrapper";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

const TweetList = () => {
  const { data: tweets, error } = useQuery<Post[]>({
    queryKey: ["tweet", "recommends"],
    queryFn: getPostRecommends,
  });

  return tweets?.map((tweet) => <Tweet post={tweet} key={tweet.postId} />);
};

export default TweetList;
