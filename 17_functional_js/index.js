function sayHi(name) {
  return `Hi, ${name}`;
}

// function makeGreeter(greeting, name) {
//   return `${greeting}, ${name}`;
// }

// function makeGreeter(greeting) {
//   // parent function / parent scope
//   function inner(name) {
//     // child function / child scope
//     return function() {
//       return `${greeting}, ${name}`;
//     };
//   }
//   return inner;
// }

// function makeGreeter(name, callback) {
//   return callback(name) + '!';
// }

const signUp = (function() {
  let id = 0;

  return function(username, dog) {
    id++;

    const user = {
      id,
      username,
      dog
    };

    return user;
  };
})();
