import React, { Component } from 'react'


export default class TodoList extends Component {

  render() {
    const { todos } = this.props

    const list = todos.map(todo => {
      return <li key={ todo }>{ todo }</li>
    })

    return (
      <ul>{list}</ul>
    )
  }
}