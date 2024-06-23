"use client";

import React, { useEffect, useMemo } from "react";
import {
  type InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Tweet from "../../home/_components/Tweet";
import type { Post } from "../../home/_components/TweetWrapper";
import getUserPosts from "../_lib/getUserPosts";
import { useInView } from "react-intersection-observer";

interface PostListProps {
  username: string;
}

const PostList = ({ username }: PostListProps) => {
  const { inView, ref } = useInView();
  const queryClient = useQueryClient();

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery<
    Post[],
    object,
    InfiniteData<Post[]>,
    [string, string, string],
    number
  >({
    queryKey: ["users", username, "getUserPosts"],
    queryFn: getUserPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    enabled: !!queryClient.getQueryData(["users", username]),
  });

  const posts = useMemo(() => {
    if (data) return data.pages.flat();
  }, [data]);

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  return (
    <>
      {posts?.map((post) => (
        <Tweet post={post} key={post.postId} />
      ))}
      <div ref={ref} />
    </>
  );
};

export default PostList;
