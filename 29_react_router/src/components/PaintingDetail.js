import React from 'react'

const PaintingDetail = ({painting}) => {
  return (
    <div>
      <h1> Title: {painting.title} </h1>
      <img alt={painting.title} src={painting.image} />
      <h4> Date: {painting.date} </h4>
      <p> Artist: {painting.artist.name} </p>
      <p> Displayed in: {painting.museum.name} </p>
    </div>
  )
}

export default PaintingDetail
