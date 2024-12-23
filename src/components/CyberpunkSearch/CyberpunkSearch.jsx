import "./CyberpunkSearch.css";
import { FaSearch } from "react-icons/fa";

export default function CyberpunkSearch({ filterList }) {
  return (
    <div className="cyberpunk-search">
      <FaSearch className="mr-4" />
      <input
        type="text"
        placeholder="Search for a specific skill here"
        className="cyberpunk-search-input w-full tomorrow-regular"
        onChange={filterList}
      />
    </div>
  );
}
