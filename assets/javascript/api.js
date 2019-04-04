// function to capitalize first letter of each word in a string
var titleCase = function(str) {
  var result = [];
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i].split("");
    word[0] = word[0].toUpperCase();
    result.push(word.join(""));
  }
  return result.join(" ");
};

var intervalID;

// displays the current time based on the which bridge is selected
$(document).on("click", ".bridge-name", function displayTime() {
  var timezone = $(this).attr("data-type");
  var timeQueryURL = "https://worldclockapi.com/api/json/" + timezone + "/now";


  $.ajax({
    url: timeQueryURL,
    method: "GET"
  }).then(function(response) {

    function runTimer(tz) {
      clearInterval(intervalID);
      intervalID = setInterval(function updateTime() {
        $(".clock").text(
          moment()
            .tz(tz)
            .format("HH:mm:ss")
        );
      }, 1000);
    };


    var timeZoneName = response.timeZoneName;
//changes the moment.tz timezone for the clock based on which bridge was selected
    if (timeZoneName === "Eastern Standard Time") {
      runTimer("America/New_York");
    } else if (timeZoneName === "Central Standard Time") {
      runTimer("America/Chicago");
    } else if (timeZoneName === "Pacific Standard Time") {
      runTimer("America/Los_Angeles");
    }
  });
});

//displays weather based on which bridge is clicked
$(document).on("click", ".bridge-name", function displayWeather() {
  var coord = $(this).attr("data-coord");
  var weatherQueryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    coord +
    "&units=imperial&APPID=5adeb498269cc58939e872c2a5c2c0a2";

  $.ajax({
    url: weatherQueryURL,
    method: "GET"
  }).then(function(response) {


    var temp = Math.round(response.main.temp);
    var humidity = response.main.humidity;
    var conditions = response.weather[0].description;
    var windSpeed = Math.round(response.wind.speed);
    var windDegrees = Math.round(response.wind.deg);

    // takes the windDegrees number and equates that to a direction that will display after the degree number
    function degToCompass(num) {
      var val = Math.floor(num / 22.5 + 0.5);
      var arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW"
      ];
      return arr[val % 16];
    }

    var conditionsUppercase = titleCase(conditions);

    $("#temp-display").text(`${temp}°F`);
    $("#humidity-display").text(`${humidity}%`);
    $("#conditions-display").text(`${conditionsUppercase}`);
    $("#windSpeed-display").text(`${windSpeed}mph`);
    $("#windDegrees-display").text(
      `${windDegrees}°${degToCompass(windDegrees)}`
    );
    degrees=windDegrees;

    console.log(temp);
    console.log(humidity);
    console.log(conditions);
    console.log(windSpeed);
    console.log(windDegrees);
  });
});
