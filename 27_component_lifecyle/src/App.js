import React, { Component } from 'react';

import WidgetSelector from './components/WidgetSelector'
import DigitalClock from './components/DigitalClock'
import StockTicker from './components/StockTicker'

class App extends Component {

  render() {
    return (
      <div id='app'>
        <WidgetSelector />
        <StockTicker />
      </div>
    );
  }
}

export default App;
