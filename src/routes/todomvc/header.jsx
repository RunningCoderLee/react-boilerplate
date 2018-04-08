import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './header.scss';

export default class Header extends Component {
  static propTypes = {
    onEnter: PropTypes.func,
  }

  static defaultProps = {
    onEnter: () => {},
  }

  handleNewTodoKeyDown = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    e.preventDefault();

    const val = this.newField.value.trim();

    if (val) {
      this.props.onEnter(val);
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
