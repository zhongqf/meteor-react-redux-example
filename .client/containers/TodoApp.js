import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import * as CollectionActions from '../actions/CollectionActions';

export default class TodoApp extends Component {
  render() {
    return (
      <Connector select={state => ({ todos: state.todos })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ todos, dispatch }) {
    const actions = bindActionCreators({...TodoActions, ...CollectionActions}, dispatch);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}
