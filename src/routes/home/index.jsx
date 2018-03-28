// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './style.scss';

const Home = () => (
  <div>
    <p className="App-intro">This is Home page!</p>
    <Button type="primary"><Link to="/about">Go to About</Link></Button>
  </div>
);

export default Home;

