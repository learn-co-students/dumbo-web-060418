// NO DOM MANIPULATION!!!

const Adapter = {
  createEngine: function(seName, seUrl, seStatus) {
    return fetch('http://localhost:3000/engines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        name: seName,
        url: seUrl,
        status: seStatus
      })
    }).then(function(resp) {
      return resp.json();
    });
  },
  getEngines: function() {
    return fetch('http://localhost:3000/engines', {
      method: 'GET'
    }).then(function(resp) {
      return resp.json();
    })
  },
  deleteEngine: function(id) {
    return fetch(`http://localhost:3000/engines/${id}`, {
      method: 'DELETE'
    })
  }
};

// class Adapter {
//   static createEngine(seName, seUrl, seStatus) {
//     return fetch('http://localhost:3000/engines', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: seName,
//         url: seUrl,
//         status: seStatus
//       })
//     }).then(function(resp) {
//       return resp.json();
//     });
//   }
//
//   static getEngines() {
//     return fetch('http://localhost:3000/engines', {
//       method: 'GET'
//     }).then(function(resp) {
//       return resp.json();
//     })
//   }
// }
