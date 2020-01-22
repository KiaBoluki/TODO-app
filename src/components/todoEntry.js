import React, { Component } from "react";
import TodoStore from "../store/TodoStore";
import {observer} from 'mobx-react'

@observer
class TodoEntry extends Component {
  state = {
    value: ""
  };
  handleKey = event =>{
    if (event.keyCode !== 13) return;
    event.preventDefault()

    TodoStore.addTodoItem(this.state.value);

    this.setState({
        value: ''
    })
  }
  render() {
    return (
      <div className="">
        <div className="header">
          <img src="logo512.png" width="100" alt="logo-ReactJS" />
          <h1 className="display-3 text-center">TODO</h1>
        </div>
        <div className="form">
          <input
            className="form-control"
            type="text"
            placeholder="What should you do?"
            value={this.state.value}
            onChange={event => {
              this.setState({
                value: event.target.value
              });
            }}
            onKeyDown={event => this.handleKey(event)}
          />
        </div>
      </div>
    );
  }
}

export default TodoEntry;
