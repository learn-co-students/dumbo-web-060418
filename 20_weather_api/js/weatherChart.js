function getFahrenheits(result) {
  return result.hourly.data.map(function(t) {
    return t.temperature;
  });
}

function getHours(result) {
  return result.hourly.data.map(function(t) {
    return new Date(t.time * 1000).getHours();
  });
}

function makeRequest(endpoint, success) {
  fetch(endpoint)
    .then(function(r) {
      return r.json();
    })
    .then(success);
}
