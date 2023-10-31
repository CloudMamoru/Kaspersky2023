import React from 'react';

const Paginator = ({ pageSize, totalEmployeesCount, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEmployeesCount / pageSize); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className='pagination is-small is-centered'
      role='navigation'
      aria-label='pagination'
    >
      <ul className='pagination-list'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a className='pagination-link' onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginator;
