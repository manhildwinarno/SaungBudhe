"use client";

import { SearchIcon } from "lucide-react";

interface Props {
  searchQuery: string;
  handleSearchQuery: (value: string) => void;
}

export default function MenuSearchBar({
  searchQuery,
  handleSearchQuery,
}: Props) {
  return (
    <div className="relative max-w-2xl w-full flex justify-center items-center">
      <input
        placeholder="Cari menu..."
        className="bg-white font-semibold rounded-full border-none outline-0 pl-5 py-2 focus:outline-4 w-full shadow shadow-black/60"
        value={searchQuery}
        onChange={(e) => handleSearchQuery(e.target.value)}
      />
      <button
        aria-label="Search"
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white flex justify-center items-center pr-3 py-2 rounded-r-full rounded-l-none border-none outline-0"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
