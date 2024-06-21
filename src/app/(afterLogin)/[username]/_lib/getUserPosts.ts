import type { Post } from "../../home/_components/TweetWrapper";
import type { InfiniteData, QueryFunction } from "@tanstack/react-query";

const getUserPosts: QueryFunction<Post[], [string, string, string], number> =
	async ({ queryKey, pageParam }) => {
		const [_, username] = queryKey;
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts?cursor=${pageParam}`,
			{
				next: {
					tags: ["posts", "users", username],
				},
				cache: "no-store",
				credentials: "include",
			},
		);
		if (!res.ok) {
			console.log(await res.text());
			throw new Error("failed to fetch getUser data");
		}
		return res.json();
	};

export default getUserPosts;
