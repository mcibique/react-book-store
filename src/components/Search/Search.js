import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../store/search';
import './Search.scss';

import Filter from './Filter';
import SearchResults from './SearchResults';

class Search extends Component {
  componentDidMount() {
    this.props.doSearch(this.props.search.query);
  }

  render() {
    return (
      <div>
        <Filter query={this.props.search.query} doSearch={this.props.doSearch.bind(this)} />
        <SearchResults {...this.props.search} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search
});

const mapDispatchToProps = {
  doSearch: search
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);;
