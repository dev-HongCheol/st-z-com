import React from "react";
import SearchInput from "../_component/SearchInput";
import SearchTab from "./_component/SearchTab";
import SearchResultList from "./_component/SearchResultList";

interface SearchPageProps {
  searchParams: { q: string; pf?: string; p?: string };
}
const SearchPage = ({ searchParams }: SearchPageProps) => {
  return (
    <div>
      <SearchInput q={searchParams.q} />
      <SearchTab />
      <SearchResultList searchParams={searchParams} />
    </div>
  );
};

export default SearchPage;
