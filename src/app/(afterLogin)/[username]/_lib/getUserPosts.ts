import type { Post } from "../../home/_components/TweetWrapper";
import type { QueryFunction } from "@tanstack/react-query";

const getUserPosts: QueryFunction<Post[], [string, string, string]> = async ({
	queryKey,
}) => {
	const [_, username] = queryKey;
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts`,
		{
			next: {
				tags: ["posts", "users", username],
			},
			cache: "no-store",
		},
	);
	if (!res.ok) {
		throw new Error("failed to fetch getUser data");
	}
	return res.json();
};

export default getUserPosts;
