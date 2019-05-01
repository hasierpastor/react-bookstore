import React, { Component } from 'react';
import Book from './Book.js';
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
  render() {
    const books = this.state.books.map(book => (
      <Book key={this.state.iban} name={this.state.name}>
        , author={this.state.author}>
      </Book>
    ));
    return <div>books</div>;
  }
}

export default BookList;
