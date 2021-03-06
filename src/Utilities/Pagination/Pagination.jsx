import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';





const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination( {
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  } );

  if ( currentPage === 0 || paginationRange?.length < 2 ) {
    return null;
  }

  const onNext = () => {
    onPageChange( currentPage + 1 );
  };

  const onPrevious = () => {
    onPageChange( currentPage - 1 );
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={ classnames( 'pagination-container', { [className]: className } ) }
    >
      <li
        className={ classnames( 'pagination-item', {
          disabled: currentPage === 1
        } ) }
        onClick={ onPrevious }
        style={{paddingLeft:"0"}}
      >
        <i className="fas fa-arrow-circle-left arrow left"></i>
      </li>
      { paginationRange && paginationRange.map( pageNumber => {
        if ( pageNumber === DOTS ) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={ classnames( 'pagination-item', {
              selected: pageNumber === currentPage
            } ) }
            onClick={ () => onPageChange( pageNumber ) }
          >
            { pageNumber }
          </li>
        );
      } ) }
      <li
        className={ classnames( 'pagination-item', {
          disabled: currentPage === lastPage
        } ) }
        onClick={ onNext }
      >
        <i className="fas fa-arrow-circle-right arrow right"></i>
      </li>
    </ul>
  );
};

export default Pagination;
