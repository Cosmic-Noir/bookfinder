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
      printType: "all",
      filter: ""
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // const apiKey = "AIzaSyDkAT1wZ-W1ANMt9y6ajVDTlhPxJsE4AHs";
    const filter = this.state.filter ? "&filter=" + this.state.filter : "";
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      this.state.searchTerm +
      "&printType=" +
      this.state.printType +
      filter;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     Authorization: apiKey,
    //     "Content-Type": "application/json"
    //   }
    // };
    console.log(url);

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
        alert(err.message);
        this.setState({
          error: err.message
        });
      });
    console.log("books should be updated");
  }

  setSearchTerm(term) {
    this.setState({ searchTerm: term });
  }

  setPrintType(type) {
    this.setState({ printType: type });
  }

  setFilterType(filter) {
    this.setState({ filter: filter });
  }

  render() {
    console.log(this.state.searchTerm);
    console.log(this.state.printType);
    console.log(this.state.filter);
    return (
      <div className="App">
        <div className="header">
          <h1>BookFinder</h1>
        </div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          printType={this.state.printType}
          filterType={this.state.filter}
          updateSearchTerm={term => this.setSearchTerm(term)}
          updatePrintType={type => this.setPrintType(type)}
          updateFilterType={filter => this.setFilterType(filter)}
          handleSearch={() => this.getData()}
        />
        <BookList bookList={this.state.books} />
      </div>
    );
  }
}

export default App;

// handleSearch={this.getData()}
