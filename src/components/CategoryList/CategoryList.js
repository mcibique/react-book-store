import React from 'react';
import './CategoryList.scss';

export const CategoryList = (props) => (
  <ul className="category-list">
    { props.categories.map(category => (
      <li className="category-list__item" key={category.id}>{category.name}</li>
      ))
    }
  </ul>
);

export default CategoryList;
