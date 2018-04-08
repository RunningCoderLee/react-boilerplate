import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterTypes } from 'Utils/enumerations';

import styles from './footer.scss';

class Footer extends Component {
  static propTypes = {
    activeTodoCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func,
    filter: PropTypes.oneOf(Object.values(FilterTypes)).isRequired,
    onChangeFilter: PropTypes.func.isRequired,
    showClearCompleted: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    onClearCompleted: () => {},
  }

  handleClearCompleted = () => {
    this.props.onClearCompleted();
  }

  renderFilterLink = (filterName, caption) => (
    <li className={styles['filter-container']}>
      <button
        className={(filterName === this.props.filter) ? styles['filter--selected'] : styles.filter}
        onClick={() => this.props.onChangeFilter(filterName)}
      >{caption}
      </button>
      {' '}
    </li>
  )

  render() {
    const { activeTodoCount, showClearCompleted } = this.props;

    const activeTodoWord = (activeTodoCount > 1) ? 'items' : 'item';

    return (
      <footer className={styles.container}>
        <span className={styles.count}>
          <strong>{activeTodoCount}</strong> {activeTodoWord} left
        </span>
        <ul className={styles['filters-container']}>
          {this.renderFilterLink(FilterTypes.ALL, 'All')}
          {this.renderFilterLink(FilterTypes.ACTIVE, 'Active')}
          {this.renderFilterLink(FilterTypes.COMPLETED, 'Completed')}
        </ul>
        { showClearCompleted ? (
          <button
            className={styles['clear-completed']}
            onClick={this.handleClearCompleted}
          >
            Clear completed
          </button>
        ) : null}
      </footer>
    );
  }
}

export default Footer;
