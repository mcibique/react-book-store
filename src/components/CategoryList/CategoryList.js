import React from 'react';
import './CategoryList.scss';

export const CategoryList = (props) => (
  <ul className="category-list">
    { props.categories.map(category => (
      <li key={category.id}>{category.name}</li>
      ))
    }
  </ul>
);

export default CategoryList;
