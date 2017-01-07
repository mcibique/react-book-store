import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/categories';
import './Sidebar.scss';

import CategoryList from '../CategoryList';

class Sidebar extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <aside className="sidebar">
        { this.props.categories.loading ? (
          <span>Loading ...</span>
        ) : (
          <CategoryList categories={this.props.categories.list} />
        )}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = {
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);;
