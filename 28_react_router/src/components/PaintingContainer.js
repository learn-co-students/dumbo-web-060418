import React from 'react'
import PaintingCard from './PaintingCard'


const PaintingContainer = (props) => {

  const paintingElements = props.paintings.map(painting => {
    return <PaintingCard title={painting.title} image={painting.image} date={painting.date}/>
  })

  return (
    <div>
      {paintingElements}
    </div>

  )
}

export default PaintingContainer
