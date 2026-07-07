import { SearchIcon } from "lucide-react";

export default function MenuSearchBar() {
  return (
    <div className="relative max-w-2xl w-full flex justify-center items-center">
      <input
        placeholder="Cari menu..."
        className="bg-white font-semibold rounded-full border-none outline-0 pl-5 py-2 focus:outline-4 w-full shadow shadow-black/60"
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
