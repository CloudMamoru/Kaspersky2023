// import React, { useState } from 'react';
// import styles from './Paginator.module.css';
// import cn from 'classnames';

// const Paginator = ({ portionSize = 10, ...props }) => {
//   let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

//   let pages = [];
//   for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i);
//   }

//   let portionCount = Math.ceil(pagesCount / portionSize);
//   let [portionNumber, setPortionNumber] = useState(1);
//   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
//   let rightPortionPageNumber = portionNumber * portionSize;

//   return (
//     <div className={styles.paginator}>
//       {portionNumber > 1 && (
//         <button
//           onClick={() => {
//             setPortionNumber(1);
//           }}
//         >
//           &lt;&lt;
//         </button>
//       )}
//       {portionNumber > 1 && (
//         <button
//           onClick={() => {
//             setPortionNumber(portionNumber - 1);
//           }}
//         >
//           PREV
//         </button>
//       )}

//       {pages
//         .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//         .map((p) => {
//           return (
//             <span
//               key={p - 1}
//               className={cn(styles.pageNumber, {
//                 [styles.selectedPage]: props.currentPage === p,
//               })}
//               onClick={(e) => {
//                 props.onPageChanged(p);
//                 props.setCurrentPage(p);
//               }}
//             >
//               {p + ' '}
//             </span>
//           );
//         })}

//       {portionCount > portionNumber && (
//         <button
//           onClick={() => {
//             setPortionNumber(portionNumber + 1);
//           }}
//         >
//           NEXT
//         </button>
//       )}
//       {portionCount > portionNumber && (
//         <button
//           onClick={() => {
//             setPortionNumber(portionCount);
//           }}
//         >
//           &gt;&gt;
//         </button>
//       )}
//     </div>
//   );
// };

// export default Paginator;

import React from 'react';

const Paginator = ({ pageSize, totalEmployeesCount, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEmployeesCount / pageSize); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='pagination is-centered' role='navigation' aria-label='pagination'>
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
