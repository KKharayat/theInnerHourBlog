import React from "react";

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
  let pageNumbers = [];
  let active = currentPage;

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(
      <li
        key={i}
        onClick={() => paginate(i)}
        className={`page-item ${i === active ? "active" : ""}`}
      >
        <a className="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">{pageNumbers}</ul>
    </nav>
  );
};

export default Pagination;
