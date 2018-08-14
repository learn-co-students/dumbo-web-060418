import React from 'react';
import AnimalCard from './AnimalCard'

const AnimalCatalogue = (props) => {
  const {animals, updateAnimal} = props

    return (
      <div>
        <h1>Animal Catalogue</h1>
        <div className='container-row'>
          {animals.map(animal => {
            return <AnimalCard animal={animal}
              key={`animal-${animal.id}`}
              updateAnimal={updateAnimal}
            />
          })}
        </div>
      </div>
    );
}

export default AnimalCatalogue;