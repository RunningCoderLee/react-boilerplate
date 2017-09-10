import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { message } from 'antd';
import LogInBox from './form';
import * as actions from '../redux';


import './style.scss';

class Login extends Component {

  static propTypes = {
    login   : PropTypes.func.isRequired,
    loading : PropTypes.bool.isRequired,
    message : PropTypes.shape({}).isRequired,
  }

  state = {
    hideMessage: '',
  }

  componentWillReceiveProps(nextProps) {
    const {
      message: {
        content: prevMsgContent,
      },
    } = this.props;
    const {
      message: {
        type: nextMsgType,
        content: nextMsgContent,
      },
    } = nextProps;

    if (nextMsgContent && nextMsgContent !== prevMsgContent) {
      this.showMessage(nextMsgContent, nextMsgType);
    }

  }

  showMessage = (content, type) => {
    const { hideMessage } = this.state;

    if (!hideMessage && type === 'loading') {
      const hide = message.loading(content, 0);
      this.setState({ hideMessage: hide });
      return;
    }

    if (typeof hideMessage === 'function') {
      hideMessage();
    }

    message[type](content);
  }

  render() {
    const { login, loading } = this.props;

    return (
      <div className="login">
        <LogInBox onLogin={login} loading={loading} />
        <h2>采集机构-<span>Agent</span>-本地数据库</h2>
        <p className="description">本工具，能够实现在本地数据库中，对采集机构指定产品的进货数据、销售数据、库存数据的读取，并传输</p>
      </div>
    );
  }
}


export default connect(state => ({
  loading : state.auth.loading,
  message : state.auth.message,
}), dispatch => ({
  login: bindActionCreators(actions.login, dispatch),
}))(Login);
