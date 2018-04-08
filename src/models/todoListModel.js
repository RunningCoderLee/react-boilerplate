import Utils from 'Utils/index';
import { FilterTypes } from 'Utils/enumerations';


class TodoListStore {
  constructor(namespace) {
    this.name = namespace;
    this._todoList = Utils.store(namespace);
    this.onChanges = [];
    this.filter = FilterTypes.ALL;
  }

  set todoList(val) {
    this._todoList = val;

    this.inform();
  }

  get todoList() {
    return this._todoList;
  }

  get activeTodos() {
    return this.todoList.filter(todo => !todo.completed);
  }

  get completedTodos() {
    return this.todoList.filter(todo => todo.completed);
  }

  get shownTodos() {
    switch (this.filter) {
      case FilterTypes.ACTIVE:
        return this.todoList.filter(todo => !todo.completed);
      case FilterTypes.COMPLETED:
        return this.todoList.filter(todo => todo.completed);
      default:
        return this.todoList;
    }
  }

  findTodo(id) {
    return this.todoList.find(item => item.id === id);
  }

  addTodo(todo) {
    this.todoList.push(todo);

    this.inform();
  }

  toggleTodo(id) {
    const todo = this.findTodo(id);

    todo.completed = !todo.completed;

    this.inform();
  }

  toggleAll(checked) {
    this.todoList = this.todoList.map(todo => Object.assign({}, todo, { completed: checked }));
  }

  updateTitle(id, val) {
    const todo = this.findTodo(id);

    todo.title = val;

    this.inform();
  }

  destroy(id) {
    const { todoList } = this;

    const todoIndex = todoList.findIndex(todo => todo.id === id);

    this.todoList = [...todoList.slice(0, todoIndex), ...todoList.slice(todoIndex + 1)];
  }

  clearCompleted() {
    this.todoList = this.todoList.filter(todo => !todo.completed);
  }

  changeFilter(type) {
    this.filter = type;

    this.inform();
  }

  subscribe(onChange) {
    this.onChanges.push(onChange);
  }

  inform() {
    Utils.store(this.name, this.todoList);
    this.onChanges.forEach(handler => handler());
  }
}

export default TodoListStore;
