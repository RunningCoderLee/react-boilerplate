import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { FilterTypes } from 'Utils/enumerations';

import styles from './footer.scss';

@inject('filterStore')
class Footer extends Component {
  static propTypes = {
    filterStore: PropTypes.shape({
      change: PropTypes.func.isRequired,
    }).isRequired,
    activeTodoCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func,
    filter: PropTypes.oneOf(Object.values(FilterTypes)).isRequired,
    showClearCompleted: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    onClearCompleted: () => {},
  }

  handleClearCompleted = () => {
    this.props.onClearCompleted();
  }

  renderFilterLink = (filterType, caption) => (
    <li className={styles['filter-container']}>
      <button
        className={(filterType === this.props.filter) ? styles['filter--selected'] : styles.filter}
        onClick={() => this.props.filterStore.change(filterType)}
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
