import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "../store/TodoStore"

@observer
export default class Counter extends Component {

  render() {
    return (
      <div className="counter">
        <span>TODO</span>
        <span>
            {
                (store.todosLength > 1) ? "s" : ""
            }
        </span>
        <span>
            &nbsp;:&nbsp;
            {
                store.todosLength
            }
        </span>
      </div>
    );
  }
}
