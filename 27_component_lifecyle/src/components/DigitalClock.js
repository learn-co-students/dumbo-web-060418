import React, { Component } from 'react'

class DigitalClock extends Component {
  constructor() {
    super()
    this.state = {time: new Date()}
  }

  componentDidMount() {
    this.time = setInterval(() => this.setState({time: new Date()}), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.time)
  }

  render () {
    const {time} = this.state
    return (
      <div className="app-children">
        <h2 id="digital">
          {time.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
