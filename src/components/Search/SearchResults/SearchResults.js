import React from 'react';
import './SearchResults.scss';

export const SearchResults = (props) => (
  props.loading ? (
    <div>Loading ...</div>
  ) : (
    <ul>
      { props.results.map(result => (
        <li key={result.id}>{ result.name }</li>
      )) }
    </ul>
  )
);

export default SearchResults;
