"use client";

import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Tweet from "../../home/_components/Tweet";
import type { Post } from "../../home/_components/TweetWrapper";
import getUserPosts from "../_lib/getUserPosts";

interface PostListProps {
  username: string;
}

const PostList = ({ username }: PostListProps) => {
  const queryClient = useQueryClient();

  const { data: posts } = useQuery<
    Post[],
    object,
    Post[],
    [string, string, string]
  >({
    queryKey: ["user", username, "getUserPosts"],
    queryFn: getUserPosts,
    enabled: !!queryClient.getQueryData(["user", username]),
  });

  return posts?.map((post) => <Tweet post={post} key={post.postId} />);
};

export default PostList;
