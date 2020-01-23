import React, { Component } from "react";
import TodoItem from "./todoItem";
import TodoStore from "../store/TodoStore";
import { observer } from "mobx-react";


@observer
export default class TodoItems extends Component {
  showList() {
    if (TodoStore.listMode == 1) {
      return TodoStore.todos.filter(item => item.completed);
    }
    if (TodoStore.listMode == 2) {
      return TodoStore.todos.filter(item => !item.completed);
    }
    else
    return TodoStore.todos
  }
  render() {
    return (
      <table className="table table-hover">
        {this.showList().map(todo => {
          return <TodoItem todo={todo} />;
        })}
      </table>
    );
  }
}
