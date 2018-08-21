import React, { Component } from 'react';
import './App.css';

import MenuBar from './components/MenuBar'
import PaintingContainer from './components/PaintingContainer'
import PaintingDetail from './components/PaintingDetail'
import About from './components/About'
import Main from './components/Main'
import { Route, Switch } from 'react-router-dom'

import paintings from './painting_data'



class App extends Component {

  render() {
    return (
      <div className="App">
        <MenuBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/paintings' render={() => <PaintingContainer paintings={paintings} />} />
          <Route path='/' component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
