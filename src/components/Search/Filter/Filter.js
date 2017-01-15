import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.query,
      category: props.category
    };
  }

  onQueryChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  onCategoryChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  submit(event) {
    event.preventDefault();
    this.props.doSearch(this.state.query, this.state.category);
  }

  render() {
    return (
      <form name="search" className="filter" onSubmit={this.submit.bind(this)}>
        <div>
          <label htmlFor="query">By name:</label>
          <input type="text" id="query" value={this.state.query} onChange={this.onQueryChange.bind(this)} />
        </div>
        {
          this.props.categories.loading ? null : (
            <div>
              <label htmlFor="category">By category:</label>
              <select value={this.state.category} onChange={this.onCategoryChange.bind(this)}>
                <option value=""></option>
                  { this.props.categories.list.map(category => (
                    <option value={category.name} key={category.id}>{category.name}</option>
                  ))}
              </select>
            </div>
          )
        }
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Filter;
