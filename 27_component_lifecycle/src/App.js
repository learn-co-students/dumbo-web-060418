import React, { Component } from 'react';
import './App.css';

import MenuBar from './components/MenuBar'
import PaintingContainer from './components/PaintingContainer'

import paintings from './painting_data'



class App extends Component {

  render() {
    console.log('in App')
    return (
      <div className="App">
        <MenuBar paintings_count={paintings.length}/>
        <PaintingContainer paintings={paintings}/>
      </div>
    );
  }
}

export default App;
