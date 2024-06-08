const getFollowRecommends = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/followRecommends`,
		{
			next: {
				tags: ["users", "followRecommends"],
			},
			cache: "no-store",
		},
	);
	if (!res.ok) {
		throw new Error("failed to fetch tweet data");
	}
	return res.json();
};

export default getFollowRecommends;
