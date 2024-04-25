"use client";
import React, { useRef, useState } from "react";
import ve from "./searchInput.css";
import Search from "@/components/icons/Search";

const SearchInput = () => {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (key: React.KeyboardEvent) => {
    if (key.code === "Enter") {
      key.preventDefault();
      console.log("🚀  file: SearchInput.tsx:11  handleSearch ,  'Enter'");
    }
  };

  return (
    <div
      className={`${ve.wrapper} ${isFocusInput ? ve.inputFocus : ve.inputBlur}`}
    >
      <div className={ve.searchIconWrapper}>
        <Search />
      </div>
      <div className={ve.searchInputWrapper}>
        <form>
          <input
            ref={searchInputRef}
            className={ve.searchInput}
            placeholder="검색"
            onBlur={() => setIsFocusInput(false)}
            onFocus={() => setIsFocusInput(true)}
            onKeyDown={handleSearch}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
