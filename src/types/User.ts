interface Follower {
	id?: string | undefined;
	userId: string;
}

export type User = {
	id: string;
	nickName: string;
	image: string;
	Followers: Follower[];
	_count: {
		Followers: number;
		Followings: number;
	};
};
