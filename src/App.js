import React, { Component } from "react";
import "./App.css";
import TodoEntry from "./components/todoEntry";
import TodoItems from './components/todoItems';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <div>
      <TodoEntry/>
      <TodoItems/>
      <Footer />
    </div>
    );
  }
}
export default App;
