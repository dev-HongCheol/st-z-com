import type { Post } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import { createStore } from "zustand";

export type TweetState = {
  selectedPost: Post | undefined;
};

export type TweetActions = {
  setSelectedPost: (post: Post | undefined) => void;
};

export type TweetStore = TweetState & TweetActions;

export const defaultInitState: TweetState = {
  selectedPost: undefined,
};

export const createTweetStore = (initState: TweetState = defaultInitState) => {
  return createStore<TweetStore>()((set) => ({
    ...initState,
    setSelectedPost: (post: Post | undefined) =>
      set((state) => ({ selectedPost: post })),
  }));
};
