import React from "react";
import BackButton from "../../_component/BackButton";
import ve from "./singlePostPage.css";
import CommentForm from "./_component/CommentForm";
import StatusTweet from "./_component/StatusTweet";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getSinglePost from "./_lib/getSinglePost";
import getPostComments from "./_lib/getPostComments";
import CommentList from "./_component/CommentList";
import { auth } from "@/auth";
interface SinglePostPageProps {
  params: {
    username: string;
    id: string;
  };
}
const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  const postId = Number(params.id);
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryFn: getSinglePost,
    queryKey: ["posts", params.id],
  });

  queryClient.prefetchQuery({
    queryFn: getPostComments,
    queryKey: ["posts", params.id, "comments"],
  });

  const dehydratedState = dehydrate(queryClient);
  const session = await auth();
  if (!session) return;
  return (
    <HydrationBoundary state={dehydratedState}>
      <article className={ve.SinglePostPageWrapper}>
        <div className={ve.header}>
          <BackButton />
          <div>
            <span>게시물</span>
          </div>
        </div>

        <article className={ve.articleWrapper}>
          <StatusTweet userId={params.username} postId={postId} />
          <CommentForm postId={postId} session={session} />
          <CommentList postId={params.id} />
        </article>
      </article>
    </HydrationBoundary>
  );
};

export default SinglePostPage;
