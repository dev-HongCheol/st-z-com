import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import type { QueryFunction } from "@tanstack/react-query";

const getSinglePost: QueryFunction<Post, [string, string]> = async ({ queryKey }) => {
	const [_, id] = queryKey;
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
		next: {
			tags: ["posts", id],
		},
		cache: "no-store",
		credentials: "include",
	});
	if (!res.ok) {
		throw new Error("failed to fetch getUser data");
	}
	return res.json();
};

export default getSinglePost;
