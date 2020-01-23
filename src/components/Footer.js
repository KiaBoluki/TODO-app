import React, { Component } from "react";
import { observer } from "mobx-react";
import FilterButtons from "./FilterButtons"
import ClearButton from "./ClearButton"
import store from '../store/TodoStore'

@observer
export default class Footer extends Component {
  render() {
    if (store.todos.length < 1) {
      return("");
    }
    else
    return (
      
      <div className="wrapper">
        
        <div className="footer">
            
            <FilterButtons />
            <ClearButton />
        </div>
        <div className="echo-1"></div>
        <div className="echo-2"></div>
      </div>
    );
  }
}
