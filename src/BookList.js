import React, { Component } from 'react';
import Book from './Book';
const uuidv4 = require('uuid/v1');

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          iban: uuidv4(),
          name: 'The Effective Engineer',
          author: 'Edmond Lau'
        },

        { iban: uuidv4(), name: 'Salt Fat Acid Heat', author: 'Samin Nosrat' },
        {
          iban: uuidv4(),
          name: 'Marina',
          author: 'Carlos Ruiz Zafon'
        }
      ]
    };
  }

  // addBook = book => {
  //   book.iban = uuidv4();
  //   let newBooks = [...this.state.books, book];
  //   this.setState({ books: newBooks });
  // };

  removeBook = name => {
    let filteredBooks = this.state.books.filter(book => {
      return book.name !== name;
    });
    this.setState({ books: filteredBooks });
  };

  render() {
    const booklist = this.state.books.map(book => {
      return (
        <Book
          key={book.iban}
          name={book.name}
          author={book.author}
          remove={this.removeBook}
        />
      );
    });
    return <div>{booklist}</div>;
  }
}

export default BookList;
