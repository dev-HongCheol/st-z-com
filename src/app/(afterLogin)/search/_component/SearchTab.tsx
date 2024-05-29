"use client";
import Tab, { type ITab } from "@/components/uis/tab/Tab";
import React, { useMemo } from "react";
import ve from "./searchTab.css";
import { useRouter, useSearchParams } from "next/navigation";

const SearchTab = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabs: ITab[] = useMemo(
    () => [
      {
        label: "인기",
        value: "rank",
        onClick: () => router.replace(`/search?q=${searchParams.get("q")}`),
      },
      {
        label: "최신",
        value: "new",
        onClick: () => {
          console.log(111);
          router.replace(`/search?q=${searchParams.get("q")}&f=live`);
        },
      },
      {
        label: "사용자",
        value: "users",
      },
      {
        label: "미디어",
        value: "media",
      },
      {
        label: "리스트",
        value: "list",
      },
    ],
    [router, searchParams]
  );

  return (
    <div className={ve.wrapper}>
      <Tab
        tabs={tabs}
        defaultSelectedTab={tabs[0]}
        handleSelectedTab={(tab) => {}}
      />
    </div>
  );
};

export default SearchTab;
