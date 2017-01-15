import React from 'react';
import classnames from 'classnames';
import './SearchResults.scss';

export const SearchResults = (props) => (
  props.loading ? (
    <div>Loading ...</div>
  ) : (
    <div className="search-results">
      { props.query ? (
        <h2>Results for <strong>{ props.query }</strong>{ props.category ? <span> in <strong>{ props.category }</strong></span> : null }</h2>
      ) : null }
      <ul className="search-results__list">
        { props.results.map(book => (
          <li className={ classnames('search-results__book', { 'search-results__book--in-cart': props.cart.items.some(item => item.id === book.id) }) } key={book.id}>
            <img src="//placehold.it/64x96/fff" />
            <div>
              <div>{ book.name }</div>
              <button type="button" onClick={() => props.addToCart(book)}>Add to cart</button>
            </div>
          </li>
        )) }
      </ul>
    </div>
  )
);

export default SearchResults;
