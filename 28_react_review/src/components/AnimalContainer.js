import React, { Component } from 'react';
import Zoo from './Zoo'
import AnimalCatalogue from './AnimalCatalogue'
import Searchbar from './Searchbar'


class AnimalContainer extends Component {
  constructor() {
    super()
    this.state = {
      animals: [],
      zoo: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/animals')
      .then(r => r.json())
      .then(animals => this.setState({animals: animals}))
  }

  removeAnimal = (animal) => {
    this.setState(prevState => {
      return {
        animals: [...prevState.animals, animal],
        zoo: this.filterAnimal(animal, prevState.zoo)
      }
    })
  }

  addAnimal = (animal) => {
    // check animal
    if (this.duplicateAnimal(animal)) return
    this.setState(prevState => {
      return {
        animals: this.filterAnimal(animal, prevState.animals),
        zoo: [...prevState.zoo, animal]
      }
    })
  }

  filterSearch = () => {
    if (!this.state.search) {
      return this.state.animals
    } else {
    return this.state.animals.filter(a => {
        return a.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
    }
  }

  duplicateAnimal = (animal) => {
    return this.state.zoo.some(a => {
      // are they the same sex and the same type
      return a.type === animal.type && a.sex === animal.sex
    })
  }

  filterAnimal = (animal, array) => {
    return array.filter(a => a !== animal)
  }

  updateSearch = (term) => {
    this.setState({search: term})
  }


  render() {
    return (
      <div>
        <Zoo
          zoo={this.state.zoo}
          updateAnimal={this.removeAnimal}
        />
        <Searchbar
          search={this.state.search}
          updateSearch={this.updateSearch}
        />
        <AnimalCatalogue
          animals={this.filterSearch()}
          updateAnimal={this.addAnimal}/>
      </div>
    );
  }
}

export default AnimalContainer;