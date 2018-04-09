import { observable, action } from 'mobx';

export default class Todo {
  @observable title;
  @observable completed;

  constructor(title, id, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  @action toggle() {
    this.completed = !this.completed;
  }

  @action setTitle(title) {
    this.title = title;
  }

  toJS() {
    return {
      id: this.id,
      title: this.title,
      completed: this.completed,
    };
  }

  static fromJS(obj) {
    return new Todo(obj.title, obj.id, obj.completed);
  }
}
