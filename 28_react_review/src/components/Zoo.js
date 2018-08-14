import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

class Zoo extends Component {
  render() {
    return (
      <div>
        <h1>My Zoo</h1>
        <div className='container-row'>
          {this.props.zoo.map(animal => {
            return <AnimalCard animal={animal} key={`animal-${animal.id}`}
            updateAnimal={this.props.updateAnimal}
          />
        })}
        </div>
      </div>
    );
  }
}

export default Zoo;