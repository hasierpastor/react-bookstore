import React, { PureComponent } from 'react';
import Button from './Button';

class Book extends PureComponent {
  //IF REMOVE BOOK CALLED RUN FUNC PASSED DOWN FROM PARENTS WITH ARGS
  removeBook = () => {
    this.props.remove(this.props.name);
  };

  render() {
    //PASS REMOVE BOOK INTO onClick
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
