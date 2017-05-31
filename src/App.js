import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import logo from './logo.svg';
import './App.scss';

function Logo(props) {

  function handleClick() {
    props.onClick();
  }

  return (
    <img
      onClick={handleClick}
      src={logo}
      className="App-logo"
      alt="logo" />
  );
}

class App extends Component {
  handleClick() {
    this.setState({
      hasClicked: true,
    });
  }

  handleBtnClick = () => {
    console.log('test');  
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo onClick={this.handleClick} />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="wrapper">
          <Button type="primary" onClick={this.handleBtnClick}>测试</Button>
          <DatePicker />
        </div>
      </div>
    );
  }
}

export default App;
