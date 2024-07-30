"use client";

import React, { useEffect } from "react";
import ve from "./photoModal.css";
import Image from "next/image";
import CloseButton from "./CloseButton";
import StatusTweet from "../../[username]/status/[id]/_component/StatusTweet";
import CommentForm from "../../[username]/status/[id]/_component/CommentForm";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import getPhotoPost from "./_lib/getPhotoPost";
import getPostComments from "../../[username]/status/[id]/_lib/getPostComments";
import PhotoPostCommentsList from "./_component/PhotoPostCommentsList";
import { useSession } from "next-auth/react";
import type { Post } from "../../home/_components/TweetWrapper";
import getSinglePost from "../../[username]/status/[id]/_lib/getSinglePost";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";

type PhotoModalProps = {
  userId: string;
  postId: string;
  photoId: string;
};
const PhotoModal = ({ userId, postId, photoId }: PhotoModalProps) => {
  const { data: session } = useSession();
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.style.overflow = "hidden";

    return () => {
      if (body) body.style.overflow = "initial";
    };
  }, []);

  const { data: post } = useQuery({
    // queryFn: getPhotoPost,
    // queryKey: ["posts", post.postId.toString(), "photo", photoId],
    queryFn: getSinglePost,
    queryKey: ["posts", postId],
  });

  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryFn: getPostComments,
    queryKey: ["posts", postId, "comments"],
  });

  const hydrateState = dehydrate(queryClient);

  if (!post || !session) return null;

  return (
    <div className={ve.modal}>
      <div className={ve.wrapper}>
        {/* image */}
        <div className={ve.imageWrapper}>
          <div className={ve.header}>
            <CloseButton />
          </div>
          <div className={ve.image}>
            {post.Images?.length && (
              <Image
                src={post.Images[0].link}
                alt=""
                fill
                priority
                sizes="500px"
              />
            )}
          </div>
          <div className={ve.actionButtonsWrapper}>
            <ActionButtons isWhite post={post} />
          </div>
        </div>
        {/* tweet */}
        <div className={ve.tweetWrapper}>
          <StatusTweet isWhite userId={userId} postId={post.postId} />
          <CommentForm isPhoto postId={post.postId} session={session} />
          <HydrationBoundary state={hydrateState}>
            <PhotoPostCommentsList postId={post.postId} />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
