"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import getSearchResult from "../_lib/getSearchResult";
import Tweet from "../../home/_components/Tweet";
import type { Post } from "../../home/_components/TweetWrapper";

interface SearchResultListProps {
  searchParams: {
    q: string;
    pf?: string;
    p?: string;
  };
}

const SearchResultList = ({ searchParams }: SearchResultListProps) => {
  const { data: searchList } = useQuery<
    Post[],
    object,
    Post[],
    [
      _: string,
      __: string,
      searchParams: {
        q: string;
        pf?: string;
        p?: string;
      }
    ]
  >({
    queryKey: ["post", "search", searchParams],
    queryFn: getSearchResult,
  });
  return searchList?.map((tweet) => <Tweet post={tweet} key={tweet.postId} />);
};

export default SearchResultList;
