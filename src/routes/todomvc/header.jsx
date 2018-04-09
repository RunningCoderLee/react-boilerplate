import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { inject, PropTypes } from 'mobx-react';

import styles from './header.scss';

@inject('todoListStore')
export default class Header extends Component {
  static propTypes = {
    todoListStore: PropTypes.observableObject.isRequired,
  }

  handleNewTodoKeyDown = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    e.preventDefault();

    const val = this.newField.value.trim();


    if (val) {
      this.props.todoListStore.addTodo(val);
      this.newField.value = '';
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <input
          ref={(c) => { this.newField = c; }}
          className={styles.add}
          placeholder="What needs to be done?"
          onKeyDown={this.handleNewTodoKeyDown}
        />
      </header>
    );
  }
}
