import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div className="book">
        <h2 className="title">{this.props.volumeInfo.title}</h2>
        <h4 className="authors">{this.props.volumeInfo.authors}</h4>
        <p className="description">{this.props.volumeInfo.description}</p>
      </div>
    );
  }
}

export default Book;
