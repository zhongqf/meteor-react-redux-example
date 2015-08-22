import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED } from '../constants/ActionTypes';
import { bindReactiveData } from 'meteoredux'

const initialState = {};

function todos(state = initialState, action) {

  switch (action.type) {
  case ADD_TODO:
    Todos.insert({
      completed: false,
      text: action.text
    });
    //We have not changed the state here, so we return original state.
    return state;

  case DELETE_TODO:
    Todos.remove(action.id)
    return state;

  case EDIT_TODO:
    Todos.update(action.id, {$set: {text: action.text}})
    return state;

  case MARK_TODO:
    const todo = Todos.findOne(action.id)
    Todos.update(action.id, {$set: {completed: !todo.completed}})
    return state;

  case MARK_ALL:
    Todos.update({}, {$set: {completed: true}})
    return state;

  case CLEAR_MARKED:
    Todos.update({}, {$set: {completed: false}})
    return state;


  default:
    return state;
  }
}

function reactiveData(){
  return {
    todos: Todos.find({}).fetch()
  }
}
export default bindReactiveData(todos, reactiveData);