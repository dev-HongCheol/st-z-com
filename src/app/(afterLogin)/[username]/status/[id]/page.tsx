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
interface SinglePostPageProps {
  params: {
    username: string;
  };
}
const SinglePostPage = ({ params }: SinglePostPageProps) => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryFn: getSinglePost,
    queryKey: ["posts", params.username],
  });

  queryClient.prefetchQuery({
    queryFn: getPostComments,
    queryKey: ["posts", params.username, "comments"],
  });

  const dehydratedState = dehydrate(queryClient);

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
          <StatusTweet userId={params.username} />
          <CommentForm />
          <CommentList userId={params.username} />
        </article>
      </article>
    </HydrationBoundary>
  );
};

export default SinglePostPage;
