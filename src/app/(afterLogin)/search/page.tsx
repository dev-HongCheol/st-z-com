import React from "react";
import SearchInput from "../_component/SearchInput";
import SearchTab from "./_component/SearchTab";

interface SearchPageProps {
  searchParams: { q: string };
}
const SearchPage = ({ searchParams }: SearchPageProps) => {
  return (
    <div>
      <SearchInput q={searchParams.q} />
      <SearchTab />
    </div>
  );
};

export default SearchPage;
