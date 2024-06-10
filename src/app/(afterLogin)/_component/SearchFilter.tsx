"use client";

import React, { useState } from "react";
import ve from "./searchFilter.css";
import { useRouter, useSearchParams } from "next/navigation";

const SearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedFilter, setSelectedFilter] = useState<string>("allUser");
  const handleSelectedFilter = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "allUser") {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("pf");
      router.replace(`/search?${newSearchParams.toString()}`);
    } else {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("pf", "on");
      router.replace(`/search?${newSearchParams.toString()}`);
    }
  };
  return (
    <div>
      <div className={ve.wrapper}>
        <h3 className={ve.title}>검색 필터</h3>
      </div>

      <div className={ve.wrapper}>
        <div className={ve.filterTitle}>사용자</div>
        <div>
          <div className={ve.inputWrapper}>
            <label htmlFor="allUser">모든 사용자</label>
            <input
              type="radio"
              name="userType"
              id="allUser"
              value="allUser"
              checked={selectedFilter === "allUser"}
              onChange={() => handleSelectedFilter("allUser")}
            />
          </div>
          <div className={ve.inputWrapper}>
            <label htmlFor="myFollow">내가 팔로우하는 사람들</label>
            <input
              type="radio"
              name="userType"
              id="myFollow"
              value="myFollow"
              checked={selectedFilter === "myFollow"}
              onChange={() => handleSelectedFilter("myFollow")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
