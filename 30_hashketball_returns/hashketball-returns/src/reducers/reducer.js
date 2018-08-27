// import combineReducers - function that combines reducers
// to different parts of state

import gamesData from '../gamesData'

const defaultState = {
  teams: gamesData.teams,
  selectedPlayer: null
}

const rootReducer = (state = defaultState, action) => {
  // action is the thing that updates state
  // actions are objects with two keys
  // { type: 'SELECT_PLAYER', payload: "how is state changed?" }
  // function that returns state


  switch (action.type) {
    case 'SELECT_PLAYER':
       // change state.selectedPlayer: action.payload
       return { ...state, selectedPlayer: action.payload }
    default:
      return state
    }
}

export default rootReducer
