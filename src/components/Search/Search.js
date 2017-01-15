import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../store/search';
import { addToCart } from '../../store/cart';
import { fetchCategories } from '../../store/categories';
import './Search.scss';

import Filter from './Filter';
import SearchResults from './SearchResults';

class Search extends Component {
  componentDidMount() {
    this.props.doSearch(this.props.search.query, this.props.search.category);
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="search">
        <Filter query={this.props.search.query} doSearch={this.props.doSearch.bind(this)} category={this.props.search.category} categories={this.props.categories} />
        <SearchResults {...this.props.search} cart={this.props.cart} addToCart={this.props.addToCart.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  categories: state.categories,
  cart: state.cart
});

const mapDispatchToProps = {
  doSearch: search,
  addToCart: addToCart,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);;
