import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TodoListStore from 'Models/todoListModel';

import Home from './home/index';
import About from './about/index';
import TodoApp from './todomvc/index';

const todoListStore = new TodoListStore('myTodos');

function renderTodoApp() {
  return <TodoApp todoListStore={todoListStore} />;
}


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo-mvc" render={renderTodoApp} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;

