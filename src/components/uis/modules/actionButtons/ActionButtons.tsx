"use client";
import Comment from "@/components/icons/Comment";
import Heart from "@/components/icons/Heart";
import ReTweet from "@/components/icons/ReTweet";
import Views from "@/components/icons/Views";
import vx from "./actionButtons.css";
import Button from "@/components/uis/atoms/Button";
import { postLikedHeart } from "./_lib/actionButtons.api";
import {
  type InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type {
  Post,
  UserId,
} from "@/app/(afterLogin)/home/_components/TweetWrapper";
import { useSession } from "next-auth/react";

interface ActionButtonsProps {
  isWhite?: boolean;
  post: Post;
}

const ActionButtons = ({ isWhite, post }: ActionButtonsProps) => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const likedHeartMutation = useMutation({
    mutationFn: postLikedHeart,
    onMutate() {
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);

      if (!queryKeys) return;
      for (const queryKey of queryKeys) {
        if (queryKey[0] === "tweet") {
          const posts: Post | InfiniteData<Post[]> | undefined =
            queryClient.getQueryData(queryKey);

          if (posts && "pages" in posts) {
            const newPosts = structuredClone(posts);
            const newCurrentPost = newPosts.pages
              .flat()
              .find((_post) => _post.postId === post.postId);
            if (!newCurrentPost) return;
            const userId = session?.user.id;
            if (userId) newCurrentPost?.Hearts.push({ userId });
            newCurrentPost._count.Hearts = newCurrentPost?._count.Hearts + 1;
          }
        }
      }
    },
  });

  const handleLikedHeart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    likedHeartMutation.mutate(post.postId);
  };

  return (
    <div className={vx.buttonWrapper}>
      <div className={vx.button}>
        <Button variant="text" className={vx.widthAuto}>
          <Comment
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
        {post._count.Comments}
      </div>
      <div className={vx.button}>
        <Button variant="text" className={vx.widthAuto}>
          <ReTweet
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
        {post._count.Reports}
      </div>
      <div className={vx.button}>
        <Button
          variant="text"
          className={vx.widthAuto}
          onClick={handleLikedHeart}
        >
          <Heart
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
        {post._count.Hearts}
      </div>
      <div className={vx.button}>
        <Button variant="text" className={vx.widthAuto}>
          <Views
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
