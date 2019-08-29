import React, { Component } from "react";
import Book from "../book/book";

class BookList extends Component {
  render() {
    const books = this.props.bookList.map((book, i) => (
      <Book {...book} key={i} />
    ));
    return <div className="bookList">{books}</div>;
  }
}

export default BookList;
