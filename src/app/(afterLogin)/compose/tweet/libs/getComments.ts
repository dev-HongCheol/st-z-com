import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";

export const getComments = async (
  postId: number,
  comment: FormData
): Promise<Post> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/comments`,
    {
      method: "post",
      credentials: "include",
      body: comment,
    }
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error("getComments fail");
};
