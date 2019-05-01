import { ADD, REMOVE } from './actionTypes';
const uuidv4 = require('uuid/v4');

const INITIAL_STATE = { books: [] };

//root reducer is in charge of making changes to redux state and initializing state
function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === ADD) {
    action.book.iban = uuidv4();
    return { books: [...state.books, action.book] };
  }
  if (action.type === REMOVE) {
    let filteredBooks = state.books.filter(book => {
      return action.name !== book.name;
    });
    return { books: filteredBooks };
  }
  return state;
}

export default rootReducer;
