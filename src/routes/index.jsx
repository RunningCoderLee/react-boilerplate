import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from 'Assets/logo.svg';

import Home from './home/index';
import About from './about/index';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;

