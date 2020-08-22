import React from "react";
import "../../styles/pagination-style.css";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          if (
            number == 1 ||
            number == currentPage - 1 ||
            number == currentPage ||
            number == currentPage + 1 ||
            number == totalPosts
          ) {
            return (
              <>
                {number == totalPosts && currentPage + 3 <= totalPosts ? (
                  <li key={number * 999} className="page-item">
                    <span className="page-link">...</span>
                  </li>
                ) : null}
                <li key={number} className="page-item">
                  <span
                    onClick={() => paginate(number)}
                    className={
                      number == currentPage
                        ? "page-link bg-primary text-light"
                        : "page-link"
                    }
                  >
                    {number}
                  </span>
                </li>
                {number == 1 && currentPage >= 4 ? (
                  <li key={number * 999} className="page-item">
                    <span className="page-link">...</span>
                  </li>
                ) : null}
              </>
            );
          }
        })}
      </ul>
    </nav>
  );
};
