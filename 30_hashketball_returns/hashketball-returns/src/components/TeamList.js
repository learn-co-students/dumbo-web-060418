import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'

const TeamList = (props) => {
  // how can TeamList know about statestate ?
  console.log('props are', props)

  const renderedTeams = props.teams.map(team => {
    return <Team key={team.id} team={team} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

const mapStateToProps = state => {
  return { teams: state.teams }
}

export default connect(mapStateToProps)(TeamList)
// connect is a function that returns a function
// invoked immediately and passed the component as an argument