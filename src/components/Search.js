import React from "react";
import "./Search.css";

const Search = ({ filter }) => {
  return (
    <div className="search d-flex align-items-center">
      <input
        type="text"
        placeholder="Search by name"
        onChange={e => filter(e.target.value)}
      />
      <i className="fas fa-search text-secondary"></i>
    </div>
  );
};

export default Search;
