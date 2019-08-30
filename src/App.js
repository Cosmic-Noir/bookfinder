import React, { Component } from "react";
import "./App.css";
import SearchForm from "./searchForm/searchForm";
import BookList from "./bookList/bookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: "romance",
      showBookList: true,
      printType: "all"
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // const apiKey = "AIzaSyDkAT1wZ-W1ANMt9y6ajVDTlhPxJsE4AHs";
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      this.state.searchTerm +
      "&printType=" +
      this.state.printType;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     Authorization: apiKey,
    //     "Content-Type": "application/json"
    //   }
    // };

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        this.setState({ books: data.items, error: null });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setSearchTerm(term) {
    this.setState({ searchTerm: term });
  }

  setPrintType(type) {
    this.setState({ printType: type });
  }

  render() {
    console.log(this.state.searchTerm);
    return (
      <div className="App">
        <div className="header">
          <h1>BookFinder</h1>
        </div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          printType={this.state.printType}
          updateSearchTerm={term => this.setSearchTerm(term)}
          handleSearch={this.getData}
        />
        <BookList bookList={this.state.books} />
      </div>
    );
  }
}

export default App;
