import React, { Component } from 'react';

import WidgetSelector from './components/WidgetSelector'
import StockTicker from './components/StockTicker'
import DigitalClock from './components/DigitalClock'

class App extends Component {
  constructor() {
    super()
    this.state = {showClock: true}
  }

  toggleWidget = () => {
    this.setState(prevState => {
      return {showClock: !prevState.showClock}
    })
  }

  render() {
    // const showClock = this.state.showClock
    const {showClock} = this.state
    return (
      <div id='app'>
        <WidgetSelector
          toggleWidget={this.toggleWidget}
         />
         {showClock ?
           <DigitalClock /> :
         <StockTicker />
       }

      </div>
    );
  }
}

export default App;


