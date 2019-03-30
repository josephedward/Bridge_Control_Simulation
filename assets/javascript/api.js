


// displays the current time based on the which bridge is selected
  $(document).on("click", ".bridge-name", function displayTime() {
  var timezone = $(this).attr("data-type");
  var timeQueryURL = "http://worldclockapi.com/api/json/" + timezone + "/now"
  
  $.ajax({
  url: timeQueryURL,
  method: "GET"
  }).then(function(response) {
  
  var utcOffset = (response.utcOffset)

  var currentBridgeTime = moment().utcOffset(utcOffset).format("hh:mm A");

  console.log(currentBridgeTime)
  });
  
  });
  
  
  //object of bridge coords that the api will pull from
  // var coords = {
  // buffaloBluff: {
  // coordinates: "lat=29.59&lon=-81.68"
  // },
  // kanawhaCanal: {
  // coordinates: "lat=37.53&lon=-77.42"
  // },
  // pascagoula: {
  // coordinates: "lat=30.37&lon=-88.56"
  // },
  // flaglerMemorial: {
  // coordinates: "lat=26.72&lon=-80.05"
  // },
  // bridgeOfLions: {
  // coordinates: "lat=29.89&lon=-81.31"
  // },
  // harryNice: {
  // coordinates: "lat=38.36&lon=-76.99"
  // }
  // }
  

//displays weather based on which bridge is clicked
$(document).on("click", ".bridge-name", function displayWeather() {
  
var coord = $(this).attr("data-coord");
var weatherQueryURL =
  "http://api.openweathermap.org/data/2.5/weather?" + coord + "&units=imperial&APPID=5adeb498269cc58939e872c2a5c2c0a2";


console.log(coord)
$.ajax({
  url: weatherQueryURL,
  method: "GET"
}).then(function(response) {

 console.log(response)

var temp = response.main.temp;
var humidity = response.main.humidity;
var conditions = response.weather[0].description;
var windSpeed = response.wind.speed;
var windDegress = response.wind.deg;

$("#temperature").text().temp

console.log(temp);
console.log(humidity);
console.log(conditions);
console.log(windSpeed);
console.log(windDegress);
})


});
