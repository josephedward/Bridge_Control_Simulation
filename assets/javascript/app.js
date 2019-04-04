//change operation features from driven/set to pull/released on click

var $switch1 = $("#switch-1");
var $switch2 = $("#switch-2");
var $switch3 = $("#switch-3");
var $switch4 = $("#switch-4");
var $switch5 = $("#switch-5");
var errorLog = [];
var transition = false;
var loggedIn = false;



//toggle between driven and pulled for locks. override css
$switch1.on("click", function() {

    //if statement to prevent out of sequence operation
  if ($switch2.attr("data-state") === "closed") {
    $switch1.toggleClass("released");
    if (
      $switch1.text().trim() === "SPAN LOCKS DRIVEN" &&
      $switch1.attr("data-state") === "closed"
    ) {
        //data state flip, text update
      $switch1.text("SPAN LOCKS PULLED");
      $switch1.attr("data-state", "open");
    } else {

        //data state flip, text update
      $switch1.text("SPAN LOCKS DRIVEN");
      $switch1.attr("data-state", "closed");
    }

    //log error if pressed out of sequence
  } else {
    alarmList(this);
  }
});

//toggle between driven and pulled for locks. override css
$switch2.on("click", function() {
  if (
    $switch1.attr("data-state") === "open" &&
    $switch3.attr("data-state") === "closed"
  ) {
    $switch2.toggleClass("released");
    if (
      $switch2.text().trim() === "TAIL LOCKS DRIVEN" &&
      $switch2.attr("data-state") === "closed"
    ) {
      $switch2.text("TAIL LOCKS PULLED");
      $switch2.attr("data-state", "open");
    } else {
      $switch2.text("TAIL LOCKS DRIVEN");
      $switch2.attr("data-state", "closed");
    }
  } else {
    alarmList(this);
  }
});

//toggle between set and released for brakes. add a class to override css
$switch3.on("click", function() {
  if (
    $switch2.attr("data-state") === "open" &&
    $switch4.attr("data-state") === "closed"
  ) {
    $switch3.toggleClass("released");
    if (
      $switch3.text().trim() === "MOTOR BRAKES SET" &&
      $switch3.attr("data-state") === "closed"
    ) {
      $switch3.text("MOTOR BRAKES RELEASED");
      $switch3.attr("data-state", "open");
    } else {
      $switch3.text("MOTOR BRAKES SET");
      $switch3.attr("data-state", "closed");
    }
  } else {
    alarmList(this);
  }
});

//toggle between set and released for brakes. add a class to override css
$switch4.on("click", function() {
  if (
    $switch3.attr("data-state") === "open" &&
    $switch5.attr("data-state") === "closed" &&
    transition === false
  ) {
    $switch4.toggleClass("released");
    if (
      $switch4.text().trim() === "MACHINERY BRAKES SET" &&
      $switch4.attr("data-state") === "closed"
    ) {
      $switch4.text("MACHINERY BRAKES RELEASED");
      $switch4.css("font-size","15px");
      $switch4.attr("data-state", "open");
    } else {
      $switch4.text("MACHINERY BRAKES SET");
      $switch4.attr("data-state", "closed");
    }
  } else {
    alarmList(this);
  }
});

//bridge movement button. if the bridge is closed, change to transition. click to finish transition.
//if the bridge is open, click to transition, click again to finish transition.
$switch5.on("click", function() {
  if ($switch4.attr("data-state") === "open") {
    if (
      $switch5.text().trim() === "BRIDGE CLOSED" ||
      $switch5.text().trim() === "BRIDGE OPEN"
    ) {
      $switch5.text("BRIDGE MOVING");
      $switch5.toggleClass("released");
      $switch5.toggleClass("transition");
      transition = true;
      
    } else if (
      $switch5.text().trim() === "BRIDGE MOVING" &&
      $switch5.attr("data-state") === "closed"
    ) {
      $switch5.attr("data-state", "open");
      $switch5.text("BRIDGE OPEN");
    transition = false;
      $switch5.toggleClass("transition");
    } else if (
      $switch5.text().trim() === "BRIDGE MOVING" &&
      $switch5.attr("data-state") === "open"
    ) {
      $switch5.attr("data-state", "closed");
      $switch5.text("BRIDGE CLOSED");
      $switch5.toggleClass("transition");
      transition = false;
    }
  } else {
    alarmList(this);
  }
});

//grab bridgethis selection and put title in bridge title block

$(".bridge-name").on("click", function() {
 closeSwitches();
  var bridgeTitle = $(this).text();
  $("#bridge-title").text(bridgeTitle);
  $("#bridge-select").text(bridgeTitle);
});

//reference bridge title in API call


//function to clear alarms if desired

$("#clear-faults").on("click", function(){
    $("#alarm-list").empty();
});






// // log in functionality
// var username = "";
// $("#user-login").on("click", function(event){

//   event.preventDefault();

// if ($("#username").val().trim() === "") {
//   alert("You fucked up the login.");
//   return false;
// } else if ($("#password").val().trim() === "") {
//   alert("you fucked up the password");
//   return false;
// } else {
//   loggedIn = true;
//   username = $("#username").val().trim();
//   $("#login-screen").toggleClass("hidden");
//   $("#active").toggleClass("hidden");

// }
// })





