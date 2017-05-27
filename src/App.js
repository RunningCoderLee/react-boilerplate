import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo onCLick={this.handleClick} />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
