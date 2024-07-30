import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import type { QueryFunction } from "@tanstack/react-query";

const getPhotoPost: QueryFunction<
  { Post: Post },
  [string, string, string, string]
> = async ({ queryKey }) => {
  const [_, postId, __, photoId] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/photos/${photoId}`,
    {
      next: {
        tags: ["posts", postId, "photo", photoId],
      },
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch getUser data");
  }
  return res.json();
};

export default getPhotoPost;
