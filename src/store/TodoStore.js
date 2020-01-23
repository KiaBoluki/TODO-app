import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable activeTodos =0;
  @observable completedTodos=0;
  @observable todosLength = 0;
  @observable listMode = 0 ;


  lastID = 0;

  @action
  addTodoItem(title) {
    if(title.trim() === "") return;
    this.todos.push(new TodoModel(title.trim(), false, this.lastID++, this));
    this.countAllTodos();
  }

  @action
  removeTodoItem(id) {
    var x = this.todos.find(x => x.id === id);
    var x1 = this.todos.indexOf(x);
    this.todos.splice(x1, 1);
    this.countAllTodos();
  }

  @action
  countAllTodos() {
    let a = this.todos.filter(com => !com.completed);
    this.activeTodos = a.length;

    this.completedTodos = this.todos.length - a.length;

  }

  @action
  clearTodos(){
    //this.todos.splice(0,this.todos.length) // clear the array 
    this.todos = []
  }

}

const store = new TodoStore();
export default store;
