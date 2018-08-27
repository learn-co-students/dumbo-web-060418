import React from 'react'
import { selectPlayer } from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Player = (props) => {

  return (
    <div onClick={ () => props.selectPlayer(props.player) } >
      <p>{props.player.name}</p>
    </div>
  )
}

// const mapDispatchToProps = () => {
//   return { selectPlayer: (player) => dispatch(selectPlayer(player)) }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ selectPlayer }, dispatch )
// }

export default connect(null, { selectPlayer })(Player)
