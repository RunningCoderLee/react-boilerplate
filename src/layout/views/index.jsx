import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';


import './style.scss';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
