"use client";

import React from "react";
import ve from "./statusTweet.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import Button from "@/components/uis/atoms/Button";
import Avatar from "@/components/uis/avatar/Avatar";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";
import getSinglePost from "../_lib/getSinglePost";
import { useQuery } from "@tanstack/react-query";
import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";

dayjs.extend(relativeTime);
dayjs.locale(ko);

interface StatusTweetProps {
  isWhite?: boolean;
  userId: string;
}

const StatusTweet = ({ userId, isWhite }: StatusTweetProps) => {
  const { data: post } = useQuery<Post, object, Post, [string, string]>({
    queryFn: getSinglePost,
    queryKey: ["posts", userId],
  });

  if (!post) return null;

  return (
    <div className={`${ve.wrapper} ${isWhite && ve.whiteColor}`}>
      <div className={ve.articleHeader}>
        <Avatar
          src={post.User.image}
          id={post.User.id}
          nickName={post.User.nickname}
          rounded
          isLink
        />
        <Button className={ve.followButton}>팔로우</Button>
      </div>
      <div className={ve.contentWrapper}>
        <div className={ve.tweetContent}>
          {/* tweetContent */}
          <div>{post.content}</div>

          <div className={ve.createAt}>
            {dayjs(post.createAt).format("A h:mm · YYYY년 M월 D일")}
          </div>

          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default StatusTweet;
