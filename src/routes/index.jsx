import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import TodoListStore from 'Stores/todoListStore';
import FilterStore from 'Stores/filterStore';
import Utils from 'Utils/index';

import Home from './home/index';
import About from './about/index';
import Counter from './counter/index';
import TodoApp from './todomvc/index';


let todoListStore = new TodoListStore('myTodos');
const localTodoListStore = Utils.store('myTodos');
if (localTodoListStore) {
  todoListStore = TodoListStore.fromJS(localTodoListStore);
}
const filterStore = new FilterStore();


function renderTodoApp() {
  return (
    <Provider todoListStore={todoListStore} filterStore={filterStore}>
      <TodoApp />
    </Provider>
  );
}


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo-mvc" render={renderTodoApp} />
      <Route exact path="/counter" component={Counter} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;

