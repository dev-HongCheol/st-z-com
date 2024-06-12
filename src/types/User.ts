import type { UserId } from "@/app/(afterLogin)/home/_components/TweetWrapper";

export type User = {
	id: string;
	nickName: string;
	image: string;
	Followers: UserId[];
	_count: {
		Followers: number;
		Followings: number;
	};
};
