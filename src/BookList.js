import React, { Component } from 'react';
import './BookList.js';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          name: 'The Effective Engineer',
          author: 'Edmond Lau'
        },
        { name: 'Salt Fat Acid Heat', author: 'Samin Nosrat' },
        {
          name: 'Marina',
          author: 'Carlos Ruiz Zafon'
        }
      ]
    };
  }
}

export default BookList;
