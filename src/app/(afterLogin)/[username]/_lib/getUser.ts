import type { User } from "@/types/User";
import type { QueryFunction } from "@tanstack/react-query";

const getUser: QueryFunction<User, [string, string]> = async ({ queryKey }) => {
	const [_, username] = queryKey;
	console.log(
		"🚀 _ getUser :",
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
	);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
		{
			next: {
				tags: ["users", username],
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

export default getUser;
