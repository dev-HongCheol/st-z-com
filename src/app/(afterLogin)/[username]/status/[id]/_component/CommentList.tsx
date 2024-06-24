"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import getPostComments from "../_lib/getPostComments";
import Tweet from "@/app/(afterLogin)/home/_components/Tweet";

interface CommentListProps {
  postId: string;
}

const CommentList = ({ postId }: CommentListProps) => {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", postId]);
  const { data: comments } = useQuery({
    queryFn: getPostComments,
    queryKey: ["posts", postId, "comments"],
    enabled: !!post,
  });

  return (
    <>
      {comments?.map((comment) => (
        <Tweet post={comment} key={comment.postId} />
      ))}
    </>
  );
};

export default CommentList;
