import { observable, computed, action, reaction } from 'mobx';
import uuid from 'uuid/v1';
import Todo from 'Models/todo';
import Utils from 'Utils/index';


export default class TodoListStore {
  autoSave = true;

  savaHandler = null;

  @observable todos = [];

  constructor(namespace) {
    this.name = namespace;
    this.todos = [];

    this.savaHandler = reaction(
      () => this.toJS(),
      (obj) => {
        if (this.autoSave) {
          Utils.store(namespace, obj);
        }
      },
    );
  }

  @computed get activeTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  @computed get completedTodos() {
    return this.todos.filter(todo => todo.completed);
  }

  @action addTodo(title) {
    this.todos.push(new Todo(title, uuid(), false));
  }

  @action toggleAll(checked) {
    this.todos = this.todos.map(todo => Object.assign(todo, { completed: checked }));
  }

  @action destroy(todo) {
    this.todos.remove(todo);
  }

  @action clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  dispose() {
    // clean up the observer
    this.saveHandler();
  }

  toJS() {
    return this.todos.map(todo => todo.toJS());
  }

  static fromJS(array) {
    const todoStore = new TodoListStore();

    todoStore.todos = array.map(item => Todo.fromJS(item));

    return todoStore;
  }
}
