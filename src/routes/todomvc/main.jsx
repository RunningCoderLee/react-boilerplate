import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './todoItem';

import styles from './main.scss';

class Main extends Component {
  static propTypes = {
    // allCompleted: PropTypes.bool.isRequired,
    shownTodos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onToggle: PropTypes.func,
    onToggleAll: PropTypes.func,
    onUpdateTitle: PropTypes.func,
    onDestroy: PropTypes.func,
  }

  static defaultProps = {
    onToggle: () => {},
    onToggleAll: () => {},
    onUpdateTitle: () => {},
    onDestroy: () => {},
  }

  handleToggle = (id) => {
    this.props.onToggle(id);
  }

  handleUpdateTitle = (id, val) => {
    this.props.onUpdateTitle(id, val);
  }

  handleToggleAll = (e) => {
    const { checked } = e.target;

    this.props.onToggleAll(checked);
  }

  handleDestroy = (id) => {
    this.props.onDestroy(id);
  }

  renderTodoIterms = shownTodos => shownTodos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={this.handleToggle}
      onDestroy={this.handleDestroy}
      onUpdateTitle={this.handleUpdateTitle}
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
