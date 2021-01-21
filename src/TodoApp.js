import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItem = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  delete = (index) => {
    //   const allItems=this.state.items;
    //   allItems.splice(index,1);

    this.setState({
      items: this.state.items.filter((data, key) => key !== index),
    });
  };
  render() {
    const { input, items } = this.state;

    return (
      <div className="todoapp-container">
        <form className="input-section" onSubmit={this.storeItem}>
          <h1>TodoApp </h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <i
                className="fas fa-trash-alt"
                onClick={() => this.delete(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
