import React, { Component } from 'react'
import './App.css';
// import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css'
import  { connect } from  'react-redux'
// import { someAction } from './actions/actions'

class App extends Component {
  // state = {
    // teams: gamesData.teams,
    // selectedPlayer: null
  // }

  // componentDidMount(){
    // calling some kind of action here
    // action creators - functions that return actions
    // action creator that fetches from an api and is then dispatched to our reducer
  // }

  // handleSelectPlayer = (player) => {
  //   this.setState({
  //     selectedPlayer: player
  //   })
  // }

  render() {
    return (
      <div className="App">
        <NavHeader />
        {/* selectPlayer={this.handleSelectPlayer} */}
        <TeamList />
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedPlayer: state.selectedPlayer }
}

export default connect(mapStateToProps)(App)
