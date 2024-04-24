"use client";
import React, { useState } from "react";
import ve from "./searchInput.css";
import Search from "@/components/icons/Search";

const SearchInput = () => {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const handleFocusInput = () => {};
  return (
    <div className={ve.wrapper}>
      <div className={ve.searchIconWrapper}>
        <Search />
      </div>
      <div className={ve.searchInputWrapper}>
        <input className={ve.searchInput} placeholder="검색" />
      </div>
    </div>
  );
};

export default SearchInput;
