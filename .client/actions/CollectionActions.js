import * as types from '../constants/ActionTypes';

export function todoChanged(todoDocs) {
  return {
    type: types.TODO_CHANGED,
    docs: todoDocs
  };
}