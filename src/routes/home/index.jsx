// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import Header from './header';

import styles from './style.scss';

const Home = () => (
  <div className={styles.container}>
    <Header />
    <nav className={styles.nav}>
      <Button type="primary"><Link to="/todo-mvc">Go to TodoMVC</Link></Button>
      <br />
      <br />
      <Button type="primary"><Link to="/counter">Go to Counter</Link></Button>
      <br />
      <br />
      <Button type="primary"><Link to="/about">Go to About</Link></Button>
    </nav>
  </div>
);

export default Home;

