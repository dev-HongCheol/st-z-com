"use client";

import type React from "react";
import ve from "./statusTweet.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import Button from "@/components/uis/atoms/Button";
import Avatar from "@/components/uis/avatar/Avatar";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";
import getSinglePost from "../_lib/getSinglePost";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";

dayjs.extend(relativeTime);
dayjs.locale(ko);

interface StatusTweetProps {
  isWhite?: boolean;
  userId: string;
  postId: string;
}

const StatusTweet = ({ isWhite, postId }: StatusTweetProps) => {
  const { data: post } = useQuery<Post, object, Post, [string, string]>({
    queryFn: getSinglePost,
    queryKey: ["posts", postId],
  });

  const mutation = useMutation({
    mutationFn: async (userId: string) => {
      const res = fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        { method: "post", credentials: "include" }
      );
    },
  });
  const handleFollow = (event: React.MouseEvent, userId: string) => {
    event.preventDefault();
    mutation.mutate(userId);
  };

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
        <Button
          className={ve.followButton}
          onClick={(event: React.MouseEvent) =>
            handleFollow(event, post.User.id)
          }
        >
          팔로우
        </Button>
      </div>
      <div className={ve.contentWrapper}>
        <div className={ve.tweetContent}>
          {/* tweetContent */}
          <div>{post.content}</div>

          <div className={ve.createAt}>
            {dayjs(post.createAt).format("A h:mm · YYYY년 M월 D일")}
          </div>

          <ActionButtons post={post} />
        </div>
      </div>
    </div>
  );
};

export default StatusTweet;
