import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './todoItem.scss';

const cx = classNames.bind(styles);
class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    onDestroy: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editText: props.todo.title,
    };
  }

  handleToggle = () => {
    const { todo } = this.props;
    todo.toggle();
  }

  handleEntryEditing = () => {
    this.setState({
      editing: true,
      editText: this.props.todo.title,
    });
  }

  handleUpdateTitle = (e) => {
    const val = e.target.value.trim();
    const { todo } = this.props;

    if (val) {
      this.setState({
        editing: false,
      });
      todo.setTitle(val);
    } else {
      this.props.onDestroy(todo);
    }
  }

  handleDestroy = () => {
    this.props.onDestroy(this.props.todo);
  }

  handleChangeTitle = (e) => {
    this.setState({
      editText: e.target.value.trim(),
    });
  }

  handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        this.setState({
          editing: false,
          editText: this.props.todo.title,
        });
        break;
      case 'Enter':
        this.handleUpdateTitle(e);
        break;
      default:
    }
  }

  render() {
    const { todo } = this.props;
    const {
      title, completed,
    } = todo;
    const { editing } = this.state;
    const className = cx({
      container: !(completed || editing),
      'container--completed': completed,
      'container--editing': editing,
    });

    return (
      <li className={className}>
        <div className={styles.view}>
          <input
            className={styles.toggle}
            type="checkbox"
            checked={completed}
            onChange={this.handleToggle}
          />
          <span
            className={styles.content}
            onDoubleClick={this.handleEntryEditing}
          >
            {title}
          </span>
          <button
            className={styles.destroy}
            onClick={this.handleDestroy}
          />
        </div>
        <input
          type="text"
          className={styles.edit}
          value={this.state.editText}
          onBlur={this.handleUpdateTitle}
          onChange={this.handleChangeTitle}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }
}

export default TodoItem;
