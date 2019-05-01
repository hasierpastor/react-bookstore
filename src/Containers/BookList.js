import React, { Component } from 'react';
import Book from '../Components/Book';
import AddBookForm from '../Components/AddBookForm';
import { connect } from 'react-redux';
import { add, remove } from '../actionCreators';
// const uuidv4 = require('uuid/v1');

//can be changed to stateless component
class BookList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: [
  //       {
  //         iban: uuidv4(),
  //         name: 'The Effective Engineer',
  //         author: 'Edmond Lau'
  //       },

  //       { iban: uuidv4(), name: 'Salt Fat Acid Heat', author: 'Samin Nosrat' },
  //       {
  //         iban: uuidv4(),
  //         name: 'Marina',
  //         author: 'Carlos Ruiz Zafon'
  //       }
  //     ]
  //   };
  // }

  //WITHOUT REDUX CREATE FUNCS HERE AND PASS DOWN AS PROPS TO CHILD
  // addBook = book => {
  //   book.iban = uuidv4();
  //   let newBooks = [...this.state.books, book];
  //   this.setState({ books: newBooks });
  // };

  // removeBook = name => {
  //   let filteredBooks = this.state.books.filter(book => {
  //     return book.name !== name;
  //   });
  //   this.setState({ books: filteredBooks });
  // };

  render() {
    const booklist = this.props.books.map(book => {
      return (
        <Book
          key={book.iban}
          name={book.name}
          author={book.author}
          remove={this.props.remove}
        />
      );
    });
    return (
      <div>
        <AddBookForm add={this.props.add} />
        {booklist}
      </div>
    );
  }
}

//map redux state to react props (this.props.book)
function mapStateToProps(reduxState) {
  return {
    books: reduxState.books
  };
}

const connectToReduxStore = connect(
  mapStateToProps,
  //have destructured mapDispatch to props here => can access using this.props.add
  { add, remove }
);

//connect return function => run func with component passed in
export default connectToReduxStore(BookList);
