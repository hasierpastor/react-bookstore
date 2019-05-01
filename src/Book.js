import React, { Component, PureComponent } from 'react';

class Book extends PureComponent {
  render() {
    return (
      <div>
        Name: {this.props.name}
        Author: {this.props.author}
      </div>
    );
  }
}

export default Book;
