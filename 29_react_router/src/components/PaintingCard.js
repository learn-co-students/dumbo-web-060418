import React from 'react'

const PaintingCard = (props) => {

  return (
    <div>
      <h1> Title: {props.title} </h1>
      <img alt={props.title} src={props.image} />
      <h4> Date: {props.date} </h4>
    </div>
  )
}

export default PaintingCard
