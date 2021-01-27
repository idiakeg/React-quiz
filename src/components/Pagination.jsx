import React from "react";

export const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="text-center">
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a href="!#" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
