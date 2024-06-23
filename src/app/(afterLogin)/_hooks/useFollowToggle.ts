import type { User } from "@/types/User";
import { useQueryClient } from "@tanstack/react-query";

const useFollow = (id: string, loginUserId: string | undefined) => {
	const queryClient = useQueryClient();
	const followQueryKeys = {
		followQueryKeys: ["users", "followRecommends"],
		profile: ["users", id],
	};
	const setFollowQueryData = () => {
		if (!loginUserId) return;
		// biome-ignore lint/complexity/noForEach: <explanation>
		Object.values(followQueryKeys).forEach((queryKey) => {
			const queryData: User | User[] | undefined = queryClient.getQueryData(queryKey);
			if (!queryData) return;

			const cloneQueryData = structuredClone(queryData);
			// 팔로우 추천
			if (queryKey.includes("followRecommends")) {
				const followingUsers = cloneQueryData as User[];

				const followingUser = followingUsers?.find((follow) => follow.id === id);
				if (!followingUser) return;
				followingUser.Followers.push({
					userId: loginUserId,
				});
				followingUser._count.Followings = followingUser._count.Followings + 1;
				queryClient.setQueryData(queryKey, followingUsers);
			} else {
				// 프로필 페이지
				const followingUser = cloneQueryData as User;
				if (!followingUser.Followers) {
					followingUser.Followers = new Array();
				}
				followingUser.Followers = new Array();
				followingUser?.Followers.push({
					id: loginUserId,
					userId: "",
				});
				followingUser._count.Followers = followingUser._count.Followers + 1;
				queryClient.setQueryData(queryKey, followingUser);
			}
		});
	};

	const setUnFollowQueryData = () => {
		if (!loginUserId) return;
		// biome-ignore lint/complexity/noForEach: <explanation>
		Object.values(followQueryKeys).forEach((queryKey) => {
			const queryData: User | User[] | undefined = queryClient.getQueryData(queryKey);
			if (!queryData) return;
			const cloneQueryData = structuredClone(queryData);
			// 팔로우 추천
			if (queryKey.includes("followRecommends")) {
				const followingUsers = cloneQueryData as User[];

				const followingUser = followingUsers?.find((follow) => follow.id === id);
				if (!followingUser) return;
				followingUser.Followers = followingUser.Followers.filter(
					(follow) => follow.userId !== loginUserId,
				);
				followingUser._count.Followings = followingUser._count.Followings + 1;
				queryClient.setQueryData(queryKey, followingUsers);
			} else {
				// 프로필 페이지
				const followingUser = cloneQueryData as User;
				followingUser.Followers = followingUser?.Followers.filter(
					(follow) => follow.id !== loginUserId,
				);

				followingUser._count.Followers = followingUser._count.Followers - 1;
				queryClient.setQueryData(queryKey, followingUser);
			}
		});
	};

	return {
		setFollowQueryData,
		setUnFollowQueryData,
	};
};

export default useFollow;
