const postFollow = async (userId: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
		{ method: "post", credentials: "include" },
	);

	if (!res.ok) {
		throw new Error("fetch error");
	}
	return res;
};

const deleteFollow = async (userId: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
		{ method: "delete", credentials: "include" },
	);

	if (!res.ok) {
		throw new Error("fetch error");
	}
	return res;
};

export { postFollow, deleteFollow };
