import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, PropTypes as mxPropTypes } from 'mobx-react';

import TodoItem from './todoItem';

import styles from './main.scss';

@inject('todoListStore')
class Main extends Component {
  static propTypes = {
    todoListStore: PropTypes.shape({
      toggleAll: PropTypes.func.isRequired,
      destroy: PropTypes.func.isRequired,
    }).isRequired,
    // allCompleted: PropTypes.bool.isRequired,
    shownTodos: PropTypes.oneOfType([
      mxPropTypes.observableArray,
      PropTypes.arrayOf(PropTypes.shape({})),
    ]).isRequired,
  }

  handleToggleAll = (e) => {
    const { checked } = e.target;

    this.props.todoListStore.toggleAll(checked);
  }

  handleDestroy = (todo) => {
    this.props.todoListStore.destroy(todo);
  }

  renderTodoIterms = shownTodos => shownTodos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onDestroy={this.handleDestroy}
    />
  ))

  render() {
    const { shownTodos } = this.props;

    return (
      <div>
        <input
          className={styles['toggle-all']}
          type="checkbox"
          onChange={this.handleToggleAll}
        />
        <ul className={styles['todo-list']}>
          {this.renderTodoIterms(shownTodos)}
        </ul>
      </div>
    );
  }
}

export default Main;
