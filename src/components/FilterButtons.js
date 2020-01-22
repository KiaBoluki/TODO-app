import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class TodoItems extends Component {
  render() {
    return (
        <div className="filter-btns">
            <a className="badge badge-primary">All</a>
            <a className="badge badge-light">Done</a>
            <a className="badge badge-light">Un-Done</a>
        </div>
    );
  }
}
