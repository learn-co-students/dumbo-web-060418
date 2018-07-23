// iife's give us a private scope
// set the return value of an iife, we can save it a variable

// constructor fns
// create an empty object for you
// give access to the object with the `this` variable
// returns the objects

function MyFleet(cars) {
  this.cars = cars
  this.cars.forEach(function(car) {
    car.fleet = this
  }.bind(this))
}

function MyCar(make, model) {
  this.make = make
  this.model = model
}

MyCar.prototype.drive = function() {
  console.log('vroom');
}

MyCar.prototype.toLocaleString = function() {
  return "My Car:  " + this.make + ' ' + this.model
}



const favoriteNumber = (1 + 1)

const FavoriteMovie = (function() {
  const allMovies = [] // i don't want anyone to modify this

  return function FavoriteMovie(name, favoriteMovie, timesWatched, firstTimeSeen) {
    const movie = {
      name,
      favoriteMovie,
      timesWatched,
      firstTimeSeen
    }

    allMovies.push(movie)

    return movie
  }
})()

























// const computerBuilder = (function(){
//   console.log('createComputerBuilder');
//   const allComputers = [];
//
//   function dog(exploded, name, year, previousExplosions, buildOs, buildVersion) {
//     console.log('computerBuilder');
//     const computer = {
//       exploded, // exploded: exploded
//       name, // name: name
//       year, // year: year
//       previousExplosions, // previousExplosions: previousExplosions
//       build: { os: buildOs, version: buildVersion },
//       gui: 'true'
//     }
//     allComputers.push(computer)
//     return computer
//   }
//
//   dog.allComputers = function() {
//     return [...allComputers]
//   }
//
//   return dog
// })()
//
// // const computerBuilder = function() {}
//
// const myOldMac = computerBuilder(true, 'my mac', 1980, [1, 2, 3], 'macOs', 'whatever');
// const myOldPC = computerBuilder(false, 'my pc', 1970, [], 'ms dos', '-1')
//
//
//
//
//
//
//
//
//
//
// // const myComputer2 = {
// //   exploded: false,
// //   name: 'my other named mac',
// //   year: 2000,
// //   previousExplosions: [1, 2, 3],
// //   build: { os: 'macOs', version: 'whatever' }
// // };
// // allComputers.push(myComputer2);
//
// // new Computer
