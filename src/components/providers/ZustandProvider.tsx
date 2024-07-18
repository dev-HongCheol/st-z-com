"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import { createTweetStore, type TweetStore } from "@/stores/tweetStrore";

export type TweetStoreApi = ReturnType<typeof TweetStore>;

export const TweetStoreContext = createContext<TweetStoreApi | undefined>(
  undefined
);

export interface TweetStoreProviderProps {
  children: ReactNode;
}

export const CounterStoreProvider = ({ children }: TweetStoreProviderProps) => {
  const storeRef = useRef<TweetStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createTweetStore();
  }

  return (
    <TweetStoreContext.Provider value={storeRef.current}>
      {children}
    </TweetStoreContext.Provider>
  );
};

export const useTweetStore = <T,>(selector: (store: TweetStore) => T): T => {
  const tweetStoreContext = useContext(TweetStoreContext);

  if (!tweetStoreContext) {
    throw new Error("tweetStoreContext must be used within TweetStoreProvider");
  }

  return useStore(tweetStoreContext, selector);
};
