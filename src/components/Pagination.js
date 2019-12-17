import React from "react";
//styles
import "./Pagination.css";

function Pagination({ postsPerPage, totalGames, paginate }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalGames / postsPerPage); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return (
<nav className="pagination" aria-label="Page navigation">
<ul className="pagination">
        {pageNumbers.map(number => (
          <li
            key={number}
            className="page-item"
            onClick={() => paginate(number)}
            role="button"
          >
            {number}
          </li>
        ))}
      </ul>
</nav>
  );
}

export default Pagination;