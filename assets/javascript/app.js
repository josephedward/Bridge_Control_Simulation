//change operation features from driven/set to pull/released on click

var $switch1 = $("#switch-1");
var $switch2 = $("#switch-2");
var $switch3 = $("#switch-3");
var $switch4 = $("#switch-4");
var $switch5 = $("#switch-5");

//toggle between driven and pulled for locks. override css
$switch1.on("click", function() {
  $switch1.toggleClass("released");
  if (
    $switch1.text().trim() === "SPAN LOCKS DRIVEN" &&
    $switch1.attr("data-state") === "closed"
  ) {
    $switch1.text("SPAN LOCKS PULLED");
    $switch1.attr("data-state", "open");
  } else {
    $switch1.text("SPAN LOCKS DRIVEN");
    $switch1.attr("data-state", "closed");
  }
});

//toggle between driven and pulled for locks. override css
$switch2.on("click", function() {
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
});

//toggle between set and released for brakes. add a class to override css
$switch3.on("click", function() {
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
});

//toggle between set and released for brakes. add a class to override css
$switch4.on("click", function() {
  $switch4.toggleClass("released");
  if (
    $switch4.text().trim() === "MACHINERY BRAKES SET" &&
    $switch4.attr("data-state") === "closed"
  ) {
    $switch4.text("MACHINERY BRAKES RELEASED");
    $switch4.attr("data-state", "open");
  } else {
    $switch4.text("MACHINERY BRAKES SET");
    $switch4.attr("data-state", "closed");
  }
});

//bridge movement button. if the bridge is closed, change to transition. click to finish transition.
//if the bridge is open, click to transition, click again to finish transition.
$switch5.on("click", function() {
  if (
    $switch5.text().trim() === "BRIDGE CLOSED" ||
    $switch5.text().trim() === "BRIDGE OPEN"
  ) {
    $switch5.text("BRIDGE MOVING");
    $switch5.toggleClass("released");
    $switch5.toggleClass("transition");
  } else if (
    $switch5.text().trim() === "BRIDGE MOVING" &&
    $switch5.attr("data-state") === "closed"
  ) {
    $switch5.attr("data-state", "open");
    $switch5.text("BRIDGE OPEN");

    $switch5.toggleClass("transition");
  } else if (
    $switch5.text().trim() === "BRIDGE MOVING" &&
    $switch5.attr("data-state") === "open"
  ) {
    $switch5.attr("data-state", "closed");
    $switch5.text("BRIDGE CLOSED");
    $switch5.toggleClass("transition");
  }
});

//grab bridge selection and put title in bridge title block

$(".bridge-name").on("click", function() {
  var bridgeTitle = $(this).text();
  $("#bridge-title").text(bridgeTitle);
});

//reference bridge title in API call

//algorithm success

/* click handler to watch for open button clicked

when open button is clicked, launch genetic algorithm

if the data-state of switch-1, switch-2, switch-3 switch-4 and switch-5 are
set to closed, change switch-1 data-state to open

if data-state of switch-1 is open && switch-2 is closed && switch-3 is closed
&& switch-4 is closed && switch 5 is closed; change switch-2 to open

if data-state of switch-3 is open && switch-2 is open && switch-3 is closed &&
switch-4 is closed && switch-5 is closed; change switch-3 to open

if data-state of switch-3 is open && switch-2 is open && switch-3 is open &&
switch-4 is closed && switch-5 is closed; change switch-4 to open

if data-state of switch-3 is open && switch-2 is open && switch-3 is open &&
switch-4 is closed && switch-5 is closed; change switch-4 to open;

if data-state of switch-3 is open && switch-2 is open && switch-3 is closed &&
switch-4 is open && switch-5 is closed; change switch-5 to transition

if switch-5 data-state="transition" .play()


else if {


if switch-1 data-state="open" && switch-2 data-state="closed" && switch-3 data-state="open"
add error "Operation out of sequence" to alarm list (prompt bridge explosion photo in canvas????)

stack if statements inside of else if where any situation that mimics the scenario above
returns the error and resets all data states to closed.

*/
