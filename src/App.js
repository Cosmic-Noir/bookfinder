import React, { Component } from "react";
import "./App.css";
import SearchForm from "./searchForm/searchForm";
import BookList from "./bookList/bookList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>BookFinder</h1>
        </div>
        <SearchForm />
        <BookList />
      </div>
    );
  }
}

export default App;
