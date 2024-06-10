interface getPostRecommendsProps {
	pageParam?: number;
}

const getPostRecommends = async ({ pageParam }: getPostRecommendsProps) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends?cursor=${pageParam}`,
		{
			next: {
				tags: ["tweet", "recommends"],
			},
			cache: "no-store",
			credentials: "include",
		},
	);
	if (!res.ok) {
		throw new Error("failed to fetch tweet data");
	}
	return res.json();
};

export default getPostRecommends;
