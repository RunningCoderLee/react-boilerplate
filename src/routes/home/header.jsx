import React from 'react';
import logo from 'Assets/logo.svg';

import styles from './header.scss';

const Header = () => (
  <header className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo" />
    <h1 className={styles.title}>Welcome to React-Boilerplate</h1>
  </header>
);

export default Header;
