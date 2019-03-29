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
