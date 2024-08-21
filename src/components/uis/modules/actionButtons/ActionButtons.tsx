"use client";
import Comment from "@/components/icons/Comment";
import Heart from "@/components/icons/Heart";
import ReTweet from "@/components/icons/ReTweet";
import Views from "@/components/icons/Views";
import vx from "./actionButtons.css";
import Button from "@/components/uis/atoms/Button";
import {
  deleteReposts,
  deleteUnLikedHeart,
  postLikedHeart,
  postReposts,
} from "./_lib/actionButtons.api";
import {
  type InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import { useSession } from "next-auth/react";
import { type MouseEvent, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import cookie from "cookie";

interface ActionButtonsProps {
  isWhite?: boolean;
  post: Post;
}

const ActionButtons = ({ isWhite, post }: ActionButtonsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const isClickedHeart = useMemo(() => {
    return !!post.Hearts?.find((heart) => heart.userId === session?.user.id);
  }, [post.Hearts, session?.user.id]);
  const isClickedReposts = useMemo(() => {
    return !!post.Reposts?.find((report) => report.userId === session?.user.id);
  }, [post.Reposts, session?.user.id]);
  const isClickedComment = useMemo(() => {
    return !!post.Comments?.find(
      (comment) => comment.userId === session?.user.id
    );
  }, [post.Comments, session?.user.id]);

  /**
   * 전체 쿼리키에서 키의 첫번째 인덱스가 tweet인 쿼리 데이터를 가져와 해당 데이터와 쿼리키 리턴
   */
  const getPostFromQuery = () => {
    const queryCache = queryClient.getQueryCache();
    const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);
    let posts: Post | InfiniteData<Post[]> | undefined;
    if (!queryKeys) return;
    const isHome = pathname === "/home";

    for (const queryKey of queryKeys) {
      if (isHome && queryKey[0] === "tweet") {
        posts = queryClient.getQueryData(queryKey);
        return { posts, queryKey };
      }
      if (
        !isHome &&
        queryKey[1] === pathname.substring(1) &&
        queryKey[2] === "getUserPosts"
      ) {
        posts = queryClient.getQueryData(queryKey);
        return { posts, queryKey };
      }
    }
  };

  /**
   * getPostFromQuery()를 사용하여 해당 글의 queryData와 키를 구해
   * 전달받은 버튼종류, 추가 작업할 toggleType를 기준으로 데이터를 가공하여
   * 해당 key에 setQueryData처리
   *
   * @param buttonType 버튼 종류
   * @param toggleType 추가 처리할 Mutate 타입
   */
  const setActionButtonQueryData = (
    buttonType: "Hearts" | "Comments" | "Reposts",
    toggleType: "plus" | "minus"
  ) => {
    const data = getPostFromQuery();
    if (!data) return;
    const { posts, queryKey } = data;

    if (posts && "pages" in posts) {
      const newPosts = structuredClone(posts);
      const newCurrentPost = newPosts.pages
        .flat()
        .find((_post) => _post.postId === post.postId);
      if (!newCurrentPost) return;
      const userId = session?.user.id;
      const button = newCurrentPost?.[buttonType];

      if (userId) {
        if (toggleType === "plus") {
          button.push({ userId });
        } else {
          const findIndex = button.findIndex(
            (_post) => _post.userId === post.User.id
          );
          button.splice(findIndex, 1);
        }
      }
      newCurrentPost._count[buttonType] =
        newCurrentPost?._count[buttonType] + (toggleType === "plus" ? 1 : -1);
      queryClient.setQueryData(queryKey, newPosts);
    } else {
      console.log("check point");
    }
  };

  // Heart
  const likedHeartMutation = useMutation({
    mutationFn: postLikedHeart,
    onMutate() {
      setActionButtonQueryData("Hearts", "plus");
    },
    onError() {
      setActionButtonQueryData("Hearts", "minus");
    },
  });

  const unLikedHeartMutation = useMutation({
    mutationFn: deleteUnLikedHeart,
    onMutate() {
      setActionButtonQueryData("Hearts", "minus");
    },
    onError() {
      setActionButtonQueryData("Hearts", "plus");
    },
  });

  // Reposts
  const RepoststMutation = useMutation({
    mutationFn: postReposts,
    onMutate() {
      setActionButtonQueryData("Reposts", "plus");
    },
    onError() {
      setActionButtonQueryData("Reposts", "minus");
    },
  });

  const unRepoststMutation = useMutation({
    mutationFn: deleteReposts,
    onMutate() {
      setActionButtonQueryData("Reposts", "minus");
    },
    onError() {
      setActionButtonQueryData("Reposts", "plus");
    },
  });

  const handleActionButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    buttonType: "Hearts" | "Comments" | "Reposts"
  ) => {
    event.stopPropagation();
    switch (buttonType) {
      case "Hearts": {
        if (isClickedHeart) {
          unLikedHeartMutation.mutate(post.postId);
        } else {
          likedHeartMutation.mutate(post.postId);
        }
        break;
      }

      case "Reposts": {
        if (isClickedReposts) {
          unRepoststMutation.mutate(post.postId);
        } else {
          RepoststMutation.mutate(post.postId);
        }
        break;
      }
    }
  };

  const handleShowCommentModal = (event: MouseEvent, post: Post) => {
    event.stopPropagation();
    router.push("/compose/tweet");
    sessionStorage.setItem("commentPost", JSON.stringify(post));
  };

  return (
    <div className={vx.buttonWrapper}>
      <div className={vx.button}>
        <Button
          variant="text"
          className={vx.widthAuto}
          onClick={(event: MouseEvent) => handleShowCommentModal(event, post)}
        >
          <Comment
            style={{
              fill: isClickedComment ? "orange" : isWhite ? "white" : "initial",
            }}
          />
        </Button>
        {post._count?.Comments && post._count.Comments !== 0}
      </div>

      <div className={vx.button}>
        <Button
          variant="text"
          className={vx.widthAuto}
          onClick={(event) => handleActionButton(event, "Reposts")}
        >
          <ReTweet
            style={{
              fill: isClickedReposts ? "green" : isWhite ? "white" : "initial",
            }}
          />
        </Button>
        {post._count?.Reposts && post._count.Reposts !== 0}
      </div>

      <div className={vx.button}>
        <Button
          variant="text"
          className={vx.widthAuto}
          onClick={(event) => handleActionButton(event, "Hearts")}
        >
          <Heart
            style={{
              fill: isClickedHeart ? "pink" : isWhite ? "white" : "initial",
            }}
          />
        </Button>
        {post._count?.Hearts && post._count.Hearts !== 0}
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
