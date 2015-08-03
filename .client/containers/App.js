import React, { Component } from 'react';
import TodoApp from './TodoApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';
import * as CollectionActions from '../actions/CollectionActions';

console.log("subscribe");
Meteor.subscribe('todos');


const redux = createRedux(stores);
// watch collections on Minimongo cache and trigger action on change
Meteor.startup(() => {

  Tracker.autorun(computation => {
    var docs = Todos.find({}).fetch();
    if (computation.firstRun) return; // ignore first empty run
    console.log('\n[Tracker] collection changed');
    redux.dispatch(CollectionActions.todoChanged(docs));
  });
});

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <TodoApp />}
      </Provider>
    );
  }
}
