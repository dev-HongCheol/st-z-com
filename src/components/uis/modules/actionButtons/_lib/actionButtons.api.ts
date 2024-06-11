const postLikedHeart = (postId: number) => {
	return fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/heart`,
		{
			method: "post",
			credentials: "include",
		},
	);
};

export { postLikedHeart };
