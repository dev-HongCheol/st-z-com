"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import ve from "./searchInput.css";
import Search from "@/components/icons/Search";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  q?: string;
  f?: string;
  pf?: string;
}

const SearchInput = ({ q }: SearchInputProps) => {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState(q || "");
  const router = useRouter();
  const handleSearch = (key: React.KeyboardEvent) => {
    if (key.code === "Enter" && searchInputRef.current?.value) {
      key.preventDefault();
      router.push(`/search?q=${searchInputRef.current?.value}`);
    }
  };

  useEffect(() => {
    if (searchInputRef.current && q) searchInputRef.current.value = q;
  }, [q]);

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
            value={search}
            ref={searchInputRef}
            onChange={(e) => setSearch(e.target.value)}
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
