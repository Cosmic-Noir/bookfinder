import React, { Component } from "react";
import "./App.css";
import SearchForm from "./searchForm/searchForm";
import BookList from "./bookList/bookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ["Something Silly", "Another Silly"],
      showBookList: true
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>BookFinder</h1>
        </div>
        <SearchForm />
        <BookList bookList={this.state.books} />
      </div>
    );
  }
}

export default App;
