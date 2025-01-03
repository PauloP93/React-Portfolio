import "./CyberpunkSearch.css";
import { FaSearch } from "react-icons/fa";

export default function CyberpunkSearch({ filterList }) {
  return (
    <div className="cyberpunk-search lg:w-[29em] lg:h-[2.5em]">
      <FaSearch className="mr-4" />
      <input
        type="text"
        placeholder="Search for a specific skill here"
        className="cyberpunk-search-input sm:w-[10em] lg:w-full tomorrow-regular"
        onChange={filterList}
      />
    </div>
  );
}
