import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "../store/TodoStore";

@observer
export default class TodoItems extends Component {
  filterCompleted(i){
    i.preventDefault();
    store.listMode = i.target.id;

    var buttons = Array.from(document.getElementsByClassName('btn'))
    
    buttons.map(button=>{
      button.classList.remove('btn-secondary')
      button.classList.add('btn-light')

    })
    
    i.target.classList.remove('btn-light')
    i.target.classList.add('btn-secondary')
  }
  render() {
    return (
        <div className="filter-btns">
            <a className="btn btn-secondary" id="0"
            onClick = {event=>this.filterCompleted(event)}
            >All</a>
            <a className="btn btn-light" id="1"
            onClick = {event=>this.filterCompleted(event)}
            >Active</a>
            <a className="btn btn-light" id="2"
            onClick = {event=>this.filterCompleted(event)}
            >Completed</a>
        </div>
    );
  }
}
