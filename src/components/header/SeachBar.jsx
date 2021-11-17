//NPM Packages
import { useState } from "react";

export default function SearchBar() {
  // Local state
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");

  // Methods
  function onSearch(event) {
    event.preventDefault();
    // history.push(`/results/${query}`); // TO DO
  }

  return (
    <div className={`search-bar ${isActive ? "search-focused" : ""}`}>
      <form onSubmit={onSearch} className="search-form">
        <button className="search-button" onClick={() => setIsActive(true)}>
          <span className="icon-search"></span>
        </button>
        {isActive && (
          <input
            type="text"
            placeholder="Title"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onBlur={() => setIsActive(false)}
          />
        )}
      </form>
    </div>
  );
}
