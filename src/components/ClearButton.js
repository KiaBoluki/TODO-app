import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class TodoItems extends Component {
  render() {
    return (
        <div className="clr-btn">
            Clear Button
        </div>
    );
  }
}
