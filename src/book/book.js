import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div className="book">
        <h3 className="title">{this.props.volumeInfo.title}</h3>
      </div>
    );
  }
}

export default Book;
