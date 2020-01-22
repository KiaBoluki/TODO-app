import React, { Component } from "react";
import TodoItem from "./todoItem";
import TodoStore from "../store/TodoStore";
import { observer } from "mobx-react";

@observer
export default class TodoItems extends Component {
  render() {
    return (
      <table className="table table-striped table-hovered">
        {TodoStore.todos.map(todo => {
          return <TodoItem todo={todo} />;
        })}
      </table>
    );
  }
}
