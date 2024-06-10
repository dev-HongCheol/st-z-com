import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import type { QueryFunction } from "@tanstack/react-query";

const getPostComments: QueryFunction<Post[], [string, string, string]> =
	async ({ queryKey }) => {
		const [_, username] = queryKey;
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/:postId/comments`,
			{
				next: {
					tags: ["posts", username, "comments"],
				},
				cache: "no-store",
				credentials: "include",
			},
		);
		if (!res.ok) {
			throw new Error("failed to fetch getUser data");
		}
		return res.json();
	};

export default getPostComments;
