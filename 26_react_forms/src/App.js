import React, { Component } from 'react';
import './App.css';
// import {InputLogger, hello} from './InputLogger'
// import InputLogger from './InputLogger'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

const todos = ["do laundry", "sweep", "dust", "buy a cake"]


class App extends Component {
  state = {todos: todos}

  updateTodos = (todo) => {
    this.setState((prevState) => {
      return {todos: [...prevState.todos, todo]}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoInput updateTodos={ this.updateTodos } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
