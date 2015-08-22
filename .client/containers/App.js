import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoApp from "../components/TodoApp";
import * as TodoActions from '../actions/TodoActions';

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(TodoActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
