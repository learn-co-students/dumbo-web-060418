import React, { Component } from 'react'

class StockTicker extends Component {
  constructor() {
    super()
    this.state = {
      price: this.stockPrice(),
      color: 'white'
    }
    this.count = 0
  }

  componentDidMount() {
    this.price = setInterval(() => this.setState((prevState) => {
      const price = this.stockPrice()
      this.color = prevState.price > price ? 'red' : 'green'
      return {price}
    }), 1000)
  }

  stockPrice = () => {
    return Math.floor(Math.random() * 100)
  }

  componentWillUnmount() {
    clearInterval(this.price)
  }

  componentDidUpdate(prevProps, prevState) {
    // if we are in this update because the state of the color was just changed, skip the color change
    if (prevState.price === this.state.price) return
    if (prevState.price > this.state.price) {
      console.log('color state', this.count)
      this.setState({color:'red'})
    } else {
      console.log('color state', this.count)
      this.setState({color:'green'})
    }
  }

  render () {
    const divStyle = {color: this.color}
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={divStyle} >
            {this.state.price}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker
