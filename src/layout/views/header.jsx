import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '$pages/login';

import logo from '../../media/logo.png';


const Header = ({ isLoggedIn, logout }) => (
  <header>
    <span className="logo-wrap"><img className="logo" src={logo} alt="romens" /></span>
    <h1>雨诺Agent数据采集工具</h1>
    {isLoggedIn ? (<button onClick={logout}>退出</button>) : ''}
  </header>
);

Header.propTypes = {
  isLoggedIn : PropTypes.bool.isRequired,
  logout     : PropTypes.func.isRequired,
};

export default connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
}), dispatch => ({
  logout: bindActionCreators(actions.logout, dispatch),
}))(Header);
