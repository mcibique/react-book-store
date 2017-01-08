import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.query
    };
  }

  onQueryChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  submit(event) {
    event.preventDefault();
    this.props.doSearch(this.state.query);
  }

  render() {
    return (
      <form name="search" onSubmit={this.submit.bind(this)}>
        <input type="text" value={this.state.query} onChange={this.onQueryChange.bind(this)} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Filter;
