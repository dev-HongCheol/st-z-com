import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import type { QueryFunction } from "@tanstack/react-query";

const getSinglePost: QueryFunction<Post, [string, string]> = async ({
	queryKey,
}) => {
	const [_, username] = queryKey;
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${username}`,
		{
			next: {
				tags: ["posts", username],
			},
			cache: "no-store",
		},
	);
	if (!res.ok) {
		throw new Error("failed to fetch getUser data");
	}
	return res.json();
};

export default getSinglePost;
