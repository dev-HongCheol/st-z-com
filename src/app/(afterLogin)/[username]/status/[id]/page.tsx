import React from "react";
import BackButton from "../../_component/BackButton";
import ve from "./singlePostPage.css";

import Tweet from "@/app/(afterLogin)/home/_components/Tweet";
import CommentForm from "./_component/CommentForm";
import StatusTweet from "./_component/StatusTweet";

//FIXME: testCode
const me = {
  name: "devhong",
  id: "devhong1234",
  image: "/default_profile_normal.png",
};
const SinglePostPage = () => {
  return (
    <article className={ve.SinglePostPageWrapper}>
      <div className={ve.header}>
        <BackButton />
        <div>
          <span>게시물</span>
        </div>
      </div>

      <article className={ve.articleWrapper}>
        <StatusTweet />
        <CommentForm />
        <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet />
        <Tweet /> <Tweet /> <Tweet /> <Tweet /> <Tweet />
      </article>
    </article>
  );
};

export default SinglePostPage;
