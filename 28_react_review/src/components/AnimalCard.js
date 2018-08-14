import React, { Component } from 'react';

class AnimalCard extends Component {

  render() {
    const animal = this.props.animal
    // const {name, img, type, sex} = this.props.animal
    return (
      <div className='animal-card' onClick={() => this.props.updateAnimal(this.props.animal)}>
        <h3>{animal.name}</h3>
        <img src={animal.img} alt={animal.name} width={150}/>
        <p>{animal.type}</p>
        <p>{animal.sex}</p>
      </div>
    );
  }
}

export default AnimalCard