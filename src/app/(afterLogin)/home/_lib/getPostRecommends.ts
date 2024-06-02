interface getPostRecommendsProps {
	pageParam?: number;
}

const getPostRecommends = async ({ pageParam }: getPostRecommendsProps) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends?cursor=${pageParam}`,
		{
			next: {
				tags: ["tweet", "followings"],
			},
			cache: "no-store",
		},
	);
	if (!res.ok) {
		throw new Error("failed to fetch tweet data");
	}
	return res.json();
};

export default getPostRecommends;
