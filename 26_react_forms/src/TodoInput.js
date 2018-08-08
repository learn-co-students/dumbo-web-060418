import React, { Component } from 'react'


export default class TodoInput extends Component {

  state = {todo: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateTodos(this.state.todo)
  }

  handleChange = (e) => {
    this.setState({todo: e.target.value})
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.todo}/>
        <input type='submit'/>
      </form>
    )
  }
}