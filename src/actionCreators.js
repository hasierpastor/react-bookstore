import { ADD, REMOVE } from './actionTypes';

//action creator return objects => create actions
export function add(book) {
  return { type: ADD, book };
}

export function remove(name) {
  return { type: REMOVE, name };
}
