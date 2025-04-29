import React from 'react';

interface PaginationProps {
  countriesPerPage: number;
  totalCountries: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="PageNavigation">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <div key={number}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
