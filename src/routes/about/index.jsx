import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './style.scss';

const About = () => (
  <div>
    <p className="App-intro">This is About page!</p>
    <Button type="primary"><Link to="/">Go to Home</Link></Button>
  </div>
);

export default About;
