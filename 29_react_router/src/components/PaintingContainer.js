import React from 'react'
import PaintingCard from './PaintingCard'
import PaintingDetail from './PaintingDetail'
import { Switch, Route } from 'react-router-dom'


const PaintingContainer = (props) => {
  const paintings = props.paintings
  const paintingElements = props.paintings.map(painting => {
    return <PaintingCard title={painting.title} image={painting.image} date={painting.date}
    slug={painting.slug} key={painting.slug}/>
  })

  return (
    <div>
      <Switch>
        <Route path='/paintings/:slug' render={(props) => {
          const painting = paintings.find(p => p.slug === props.match.params.slug)
          // console.log(painting)
          return <PaintingDetail painting={painting} />
        }} />
        <Route path='/paintings' render={() => paintingElements } />
      </Switch>
    </div>

  )
}

export default PaintingContainer
