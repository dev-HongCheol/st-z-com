"use client";

import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo } from "react";
import getSearchResult from "../_lib/getSearchResult";
import Tweet from "../../home/_components/Tweet";
import type { Post } from "../../home/_components/TweetWrapper";
import { useInView } from "react-intersection-observer";

interface SearchResultListProps {
  searchParams: {
    q: string;
    pf?: string;
    p?: string;
  };
}

const SearchResultList = ({ searchParams }: SearchResultListProps) => {
  const { inView, ref } = useInView();
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery<
    Post[],
    object,
    InfiniteData<Post[]>,
    [
      _: string,
      __: string,
      searchParams: {
        q: string;
        pf?: string;
        p?: string;
      }
    ],
    number
  >({
    queryKey: ["post", "search", searchParams],
    queryFn: getSearchResult,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });

  const searchList = useMemo(() => {
    if (data) return data.pages.flat();
  }, [data]);

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  return (
    <>
      {searchList?.map((tweet) => (
        <Tweet post={tweet} key={tweet.postId} />
      ))}
      <div ref={ref} />
    </>
  );
};

export default SearchResultList;
