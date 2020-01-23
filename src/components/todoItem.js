import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "../store/TodoStore";

@observer
class TodoItem extends Component {
  state = {
    comClass: "todo-item completed",
    notComClass: "todo-item"
  };

  onToggle = () => {
    this.props.todo.toggle();
    store.countAllTodos();
  };

  removeTodoItem(id) {
    store.removeTodoItem(id);
  }

  render() {
    const { todo } = this.props;

    return (
      <tr>
        <td>
          <label className={
          todo.completed ? this.state.comClass : this.state.notComClass
        }>
            <input
              type="checkbox"
              name="task"
              id="task"
              className="form-check-label"
              checked={todo.completed}
              onChange={this.onToggle}
            />
            {todo.title}
            <span className="checkmark" id="checkmark"></span>
          </label>
        </td>
        <td className="exit-btn">
          <i
            className="fas fa-trash"
            onClick={() => this.removeTodoItem(todo.id)}
            title ={'Delete ' + todo.title}
          >
          </i>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
