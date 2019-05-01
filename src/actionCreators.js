import { ADD, REMOVE } from './actionTypes';

export function add(book) {
  return { type: ADD, book };
}

export function remove(name) {
  return { type: REMOVE, name };
}
