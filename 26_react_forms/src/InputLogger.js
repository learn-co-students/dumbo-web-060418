import React, { Component } from 'react'


export default class InputLogger extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', switchOn: true}
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleClick = (e) => {
    this.setState(prevState => {
      return {switchOn: !prevState.switchOn}
    }, () => {console.log(this.state)})
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='type here'/>
        <p>{this.state.value}</p>

        <button onClick={this.handleClick}>Flip Switch</button>
        <p>This switch is {this.state.switchOn ? 'on' : 'off'}</p>
      </div>
    )
  }
}

// const hello = 'hello'

// export {InputLogger: InputLogger, hello: hello}
// export {InputLogger, hello}

