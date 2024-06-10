import { cookies } from "next/headers";

interface getFollowingPostsProps {
	pageParam?: number;
}

const getFollowingPosts = async ({ pageParam }: getFollowingPostsProps) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/followings?cursor=${pageParam}`,
		{
			next: {
				tags: ["tweet", "followings"],
			},
			cache: "no-store",
			credentials: "include",
		},
	);
	if (!res.ok) {
		const data = await res.json();
		console.log(data);
		throw new Error("failed to fetch tweet data");
	}
	return res.json();
};

export default getFollowingPosts;
