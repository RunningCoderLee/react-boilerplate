// region import modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { observer, inject, PropTypes as mxPropTypes } from 'mobx-react';
import { FilterTypes } from 'Utils/enumerations';

import Header from './header';
import Main from './main';
import Footer from './footer';

import styles from './style.scss';
// endregion import modules

@inject('todoListStore', 'filterStore')
@observer
class TodoApp extends Component {
  static propTypes = {
    todoListStore: PropTypes.shape({
      todos: mxPropTypes.observableArray.isRequired,
      addTodo: PropTypes.func.isRequired,
      toggleAll: PropTypes.func.isRequired,
      clearCompleted: PropTypes.func.isRequired,
    }).isRequired,
    filterStore: PropTypes.shape({}).isRequired,
  }

  handleEnter = (val) => {
    this.props.todoListStore.addTodo({
      id: uuid(),
      title: val,
      completed: false,
    });
  }

  handleClearCompleted = () => {
    this.props.todoListStore.clearCompleted();
  }

  renderMain = () => {
    const { todoListStore, filterStore } = this.props;
    const { todos } = todoListStore;
    let shownTodos;

    if (todos.length === 0) {
      return null;
    }

    const allCompleted = (todoListStore.activeTodos === 0);

    switch (filterStore.type) {
      case FilterTypes.ACTIVE:
        shownTodos = todoListStore.activeTodos;
        break;
      case FilterTypes.COMPLETED:
        shownTodos = todoListStore.completedTodos;
        break;
      default:
        shownTodos = todoListStore.todos;
        break;
    }

    return (
      <Main
        allCompleted={allCompleted}
        shownTodos={shownTodos}
      />
    );
  }

  renderFooter = () => {
    const { todoListStore, filterStore } = this.props;
    const { todos } = todoListStore;

    if (todos.length === 0) {
      return null;
    }

    const shouldShowClearCompleted = todoListStore.completedTodos.length > 0;

    return (
      <Footer
        activeTodoCount={todoListStore.activeTodos.length}
        onClearCompleted={this.handleClearCompleted}
        filter={filterStore.type}
        showClearCompleted={shouldShowClearCompleted}
      />
    );
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h1 className={styles.title}>todos</h1>
          <section className={styles.main}>
            <Header onEnter={this.handleEnter} />
            {this.renderMain()}
            {this.renderFooter()}
          </section>
          <footer className={styles.info}>
            <p>Double-click to edit a todo</p>
            <p>Created by <a href="https://github.com/runningcoderlee/">Kevin Lee</a></p>
          </footer>
        </div>
      </div>
    );
  }
}


export default TodoApp;
