import React, { PropTypes } from 'react';
import Menu from './menu';

const Main = ({ children }) => (
  <div className="main">
    <Menu />
    <div className="content"> {children}</div>
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: '',
};

export default Main;
