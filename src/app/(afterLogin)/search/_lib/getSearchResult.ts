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
	]
> = async ({ queryKey }) => {
	const [_1, _2, { q, pf, p }] = queryKey;

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?${q ? `q=${q}` : ""}`,
		{
			next: {
				tags: ["post", "search", q],
			},
			cache: "no-store",
		},
	);
	if (!res.ok) {
		throw new Error("failed to fetch tweet data");
	}
	return res.json();
};

export default getSearchResult;
