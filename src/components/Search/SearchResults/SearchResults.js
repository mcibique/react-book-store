import React from 'react';
import classnames from 'classnames';
import './SearchResults.scss';

export const SearchResults = (props) => (
  props.loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      { props.query ? (
        <h2>Results for <strong>{ props.query }</strong>{ props.category ? <span> in <strong>{ props.category }</strong></span> : null }</h2>
      ) : null }
      <ul className="search-results">
        { props.results.map(book => (
          <li className={ classnames('search-results__book', { 'in-cart': props.cart.items.includes(book) }) } key={book.id}>
            { book.name }
            <button type="button" onClick={() => props.addToCart(book)}>Add to cart</button>
          </li>
        )) }
      </ul>
    </div>
  )
);

export default SearchResults;
