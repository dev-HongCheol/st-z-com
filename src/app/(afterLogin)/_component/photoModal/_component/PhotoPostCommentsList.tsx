import getPostComments from "@/app/(afterLogin)/[username]/status/[id]/_lib/getPostComments";
import Tweet from "@/app/(afterLogin)/home/_components/Tweet";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface PhotoPostCommentsListProps {
  postId: number;
}
const PhotoPostCommentsList = ({ postId }: PhotoPostCommentsListProps) => {
  const { data: comments } = useQuery({
    queryFn: getPostComments,
    queryKey: ["posts", postId.toString(), "comments"],
  });
  return comments?.map((comment) => (
    <Tweet post={comment} isPhoto key={comment.postId} />
  ));
};

export default PhotoPostCommentsList;
