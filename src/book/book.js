import React, { Component } from "react";
import "./book.css";

class Book extends Component {
  render() {
    // const test =
    //   "http://books.google.com/books/content?id=XZAMHDbMtwIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
    return (
      <div className="book">
        <img
          alt="Thumbnail"
          className="thumbnail"
          src={this.props.volumeInfo.imageLinks.thumbnail}
        ></img>
        <h2 className="title">{this.props.volumeInfo.title}</h2>
        <h4 className="authors">{this.props.volumeInfo.authors}</h4>
        <p className="description">{this.props.volumeInfo.description}</p>
      </div>
    );
  }
}

export default Book;
// [""0""].volumeInfo.imageLinks.thumbnail
