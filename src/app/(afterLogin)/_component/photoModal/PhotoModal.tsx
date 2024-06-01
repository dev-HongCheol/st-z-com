"use client";

import React, { useEffect } from "react";
import ve from "./photoModal.css";
import Image from "next/image";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";
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

type PhotoModalProps = {
  userId: string;
};
const PhotoModal = ({ userId }: PhotoModalProps) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.style.overflow = "hidden";

    return () => {
      if (body) body.style.overflow = "initial";
    };
  }, []);

  const { data: photoPost } = useQuery({
    queryFn: getPhotoPost,
    queryKey: ["posts", userId, "photo"],
  });

  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryFn: getPostComments,
    queryKey: ["posts", userId, "comments"],
  });

  const hydrateState = dehydrate(queryClient);

  if (!photoPost) return null;

  return (
    <div className={ve.modal}>
      <div className={ve.wrapper}>
        {/* image */}
        <div className={ve.imageWrapper}>
          <div className={ve.header}>
            <CloseButton />
          </div>
          <div className={ve.image}>
            {photoPost.Images?.length && (
              <Image
                src={photoPost.Images[0].link}
                alt=""
                fill
                priority
                sizes="500px"
              />
            )}
          </div>
          <div className={ve.actionButtonsWrapper}>
            <ActionButtons isWhite />
          </div>
        </div>
        {/* tweet */}
        <div className={ve.tweetWrapper}>
          <StatusTweet isWhite userId={userId} />
          <CommentForm isPhoto />
          <HydrationBoundary state={hydrateState}>
            <PhotoPostCommentsList userId={userId} />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
