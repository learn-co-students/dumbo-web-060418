import React from 'react'
import PaintingCard from './PaintingCard'


const PaintingContainer = (props) => {

  console.log('in paintings container', props)

  const paintingElements = props.paintings.map(painting => {
    return <PaintingCard title={painting.title} image={painting.image} date={painting.date}/>
  })

  console.log(paintingElements)
  return (
    <div>
      {paintingElements}
    </div>

  )
}

export default PaintingContainer
