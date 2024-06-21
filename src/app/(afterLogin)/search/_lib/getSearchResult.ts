import type { QueryFunction } from "@tanstack/react-query";
import type { Post } from "../../home/_components/TweetWrapper";

const getSearchResult: QueryFunction<
	Post[],
	[
		_: string,
		__: string,
		searchParams: {
			q: string;
			pf?: string;
			p?: string;
		},
	],
	number
> = async ({ queryKey, pageParam }) => {
	const [_1, _2, searchParams] = queryKey;
	const urlSearchParams = new URLSearchParams(searchParams);

	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_BASE_URL
		}/api/posts?cursor=${pageParam}&${urlSearchParams.toString()}`,
		{
			next: {
				tags: ["post", "search", urlSearchParams.get("q") || ""],
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

export default getSearchResult;
