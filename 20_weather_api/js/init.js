document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = 'your api key';
  var CORS_WRAPPER = 'https://cors-anywhere.herokuapp.com/';
  var URL =
    CORS_WRAPPER +
    'https://api.darksky.net/forecast/' +
    API_KEY +
    '/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily';
  var ctx = document.getElementById('NYCWeatherChart').getContext('2d');

  makeRequest(URL, function(json) {
    var tempChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: getHours(json),
        datasets: [
          {
            data: getFahrenheits(json)
          }
        ]
      }
    });
  });
});
