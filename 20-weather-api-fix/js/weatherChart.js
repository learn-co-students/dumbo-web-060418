function getFahrenheits(result) {
  return result.hourly.data.map((t) => t.temperature);
}

function getHours(result) {
  return result.hourly.data.map((t) => new Date(t.time * 1000).getHours());
}

function makeRequest(endpoint, success) {
  fetch(endpoint)
    .then((r) => r.json())
    .then(success);
}
