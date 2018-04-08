// region import modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

// import TodoList from 'Models/todoListModel';
import Header from './header';
import Main from './main';
import Footer from './footer';

import styles from './style.scss';
// endregion import modules

class TodoApp extends Component {
  static propTypes = {
    todoListStore: PropTypes.shape({
      todoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      subscribe: PropTypes.func.isRequired,
      addTodo: PropTypes.func.isRequired,
      toggleTodo: PropTypes.func.isRequired,
      toggleAll: PropTypes.func.isRequired,
      updateTitle: PropTypes.func.isRequired,
      destroy: PropTypes.func.isRequired,
      clearCompleted: PropTypes.func.isRequired,
      changeFilter: PropTypes.func.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.todoListStore.subscribe(this.forceUpdate.bind(this));
  }

  handleEnter = (val) => {
    this.props.todoListStore.addTodo({
      id: uuid(),
      title: val,
      completed: false,
    });
  }

  handleToggle = (id) => {
    this.props.todoListStore.toggleTodo(id);
  }

  handleToggleAll = (checked) => {
    this.props.todoListStore.toggleAll(checked);
  }

  handleUpdateTitle = (id, val) => {
    this.props.todoListStore.updateTitle(id, val);
  }

  handleDestroy = (id) => {
    this.props.todoListStore.destroy(id);
  }

  handleClearCompleted = () => {
    this.props.todoListStore.clearCompleted();
  }

  handleChangeFilter = (type) => {
    this.props.todoListStore.changeFilter(type);
  }

  renderMain = () => {
    const { todoListStore } = this.props;
    const { todoList } = todoListStore;

    if (todoList.length === 0) {
      return null;
    }

    const allCompleted = (todoListStore.activeTodos === 0);

    return (
      <Main
        allCompleted={allCompleted}
        shownTodos={todoListStore.shownTodos}
        onToggleAll={this.handleToggleAll}
        onToggle={this.handleToggle}
        onUpdateTitle={this.handleUpdateTitle}
        onDestroy={this.handleDestroy}
      />
    );
  }

  renderFooter = () => {
    const { todoListStore } = this.props;
    const { todoList } = todoListStore;

    if (todoList.length === 0) {
      return null;
    }

    const shouldShowClearCompleted = todoListStore.completedTodos.length > 0;

    return (
      <Footer
        activeTodoCount={todoListStore.activeTodos.length}
        onClearCompleted={this.handleClearCompleted}
        filter={todoListStore.filter}
        onChangeFilter={this.handleChangeFilter}
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
