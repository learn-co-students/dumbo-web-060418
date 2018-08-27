import React from 'react'
import { Link } from 'react-router-dom'

const PaintingCard = (props) => {

  return (
    <div>
      <h1> Title: {props.title} </h1>
      <Link to={`paintings/${props.slug}`}>
        <img alt={props.title} src={props.image} />
      </Link>
      <h4> Date: {props.date} </h4>
    </div>
  )
}

export default PaintingCard
