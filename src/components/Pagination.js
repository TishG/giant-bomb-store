import React from "react";
//styles
import "./Pagination.css";

const Pagination = ({ gamesPerPage, totalGames, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
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
          >
            <button className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
