import React, { Component } from 'react';
import './BookList.js';
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
}

export default BookList;
