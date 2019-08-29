import React, { Component } from "react";
import "./App.css";
import SearchForm from "./searchForm/searchForm";
import BookList from "./bookList/bookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookList: true
    };
  }

  componentDidMount() {
    // const apiKey = "AIzaSyDkAT1wZ-W1ANMt9y6ajVDTlhPxJsE4AHs";
    const url = "https://www.googleapis.com/books/v1/volumes?q=love";
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
