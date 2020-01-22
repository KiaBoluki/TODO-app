import React, { Component } from "react";
import { observer } from "mobx-react";
import Counter from "./Counter"
import FilterButtons from "./FilterButtons"
import ClearButton from "./ClearButton"

@observer
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <Counter />
          <FilterButtons />
          <ClearButton />
      </div>
    );
  }
}
