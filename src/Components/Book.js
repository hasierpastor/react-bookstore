import React, { PureComponent } from 'react';
import Button from './Button';

class Book extends PureComponent {
  removeBook = () => {
    this.props.remove(this.props.name);
  };

  render() {
    return (
      <div>
        Name: {this.props.name}
        Author: {this.props.author}
        <button onClick={this.removeBook}>Delete</button>
      </div>
    );
  }
}

export default Book;
