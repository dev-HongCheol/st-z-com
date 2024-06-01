import React from "react";
import BackButton from "../../_component/BackButton";
import ve from "./singlePostPage.css";
import CommentForm from "./_component/CommentForm";
import StatusTweet from "./_component/StatusTweet";
interface SinglePostPageProps {
  params: {
    username: string;
  };
}
const SinglePostPage = ({ params }: SinglePostPageProps) => {
  return (
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
        {/*  <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet />
        <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet /> */}
      </article>
    </article>
  );
};

export default SinglePostPage;
