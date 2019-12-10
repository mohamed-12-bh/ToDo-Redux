import React, { Component } from "react";
import TodoItems from "./Components/TodoItems";
import AddItem from "./Components/AddItem";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <AddItem />
        <TodoItems />
      </div>
    );
  }
}

