import React, { Component } from "react";
import "./searchForm.css";

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch();
  }

  render() {
    return (
      <div className="searchForm">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={e => this.props.updateSearchTerm(e.target.value)}
          ></input>
          <button type="submit">Search</button> <br></br>
          <label htmlFor="printType">Print Type:</label>
          <select
            id="printType"
            value={this.props.printType}
            onChange={e => this.props.updatePrintType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="bookType">Book Type:</label>
          <select
            id="bookType"
            value={this.props.filterType}
            onChange={e => this.props.updateFilterType(e.target.value)}
          >
            <option value="">No Filter</option>
            <option value="free-ebooks">Free E-books</option>
            <option value="partial">Partial Previewable</option>
            <option value="full">Full Text Viewable</option>
            <option value="paid-ebooks">Paid E-books</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchForm;
