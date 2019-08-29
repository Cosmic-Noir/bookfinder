import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="searchForm">
        <form>
          <label htmlFor="search">Search:</label>
          <input type="text"></input>
          <button type="submit">Search</button>
          <label htmlFor="printType">Print Type:</label>
          <input type="option"></input>
          <label htmlFor="bookType">Book Type:</label>
          <input type="option"></input>
        </form>
      </div>
    );
  }
}

export default SearchForm;
