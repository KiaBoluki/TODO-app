import React, { Component } from "react";
import { observer } from "mobx-react";
import store from '../store/TodoStore';

@observer
export default class TodoItems extends Component {
  clearList(){
    store.clearTodos();
  }
  render() {
    return (
        <div className="clr-btn" title="Clear all completed todo items">
            <i className="fas fa-trash-alt" onClick={()=>this.clearList()}/>
        </div>
    );
  }
}
