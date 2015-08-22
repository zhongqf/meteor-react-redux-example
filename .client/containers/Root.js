import React, { Component } from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todosReducer } from '../reducers';
import { connectToMeteor } from 'meteoredux';

Meteor.subscribe('todos');

const store = createStore(todosReducer);
connectToMeteor(store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}
