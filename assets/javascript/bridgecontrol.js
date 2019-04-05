var isOpen = false;
var isRunning = false;
//GRAB THE OPEN/CLOSE BUTTON
$("#operate-button").on("click", function() {
  //IF THE BRIDGE IS CLOSED...
  console.log($("#bridge-title").text());
  if (isRunning === false && $("#bridge-title").text().trim() !== "Select Bridge") {
    isRunning = true;
  if (isOpen === false) {
    //FLIP THE BRIDGE STATE SO THE FUNCTION DOESN'T CALL TWICE
    isOpen = true;
    //CHANGE THE CLASS TO TRANSITION
    $("#operate-button").toggleClass("transition released");
    //CHANGE THE TEXT TO OPENING
    $("#operate-button").text("OPENING");
    //RUN THE OPENING FUNCTION
    runOpeningSequence();
//IF THE BRIDGE IS OPEN..
  } else if (isOpen === true) {
    //FLIP THE BRIDGE STATE SO THE FUNCTION DOESN'T CALL TWICE
    isOpen = false;
    //TOGGLE THE TRANSITION CLASS
    $("#operate-button").toggleClass("transition");
    //CHANGE THE TEXT TO CLOSING
    $("opeate-button").text("CLOSING");
    runClosingSequence();
  } 
}
});

//OPENING FUNCTION
function runOpeningSequence() {
  setTimeout(function() {
    //SHOW SPAN LOCKS PULLING
    spanLocks();
    setTimeout(function() {
      //SHOW TAIL LOCKS PULLING
      tailLocks();
      setTimeout(function() {
        //SHOW MOTOR BRAKES RELEASING
        motorBrakes();
        setTimeout(function() {
          //SHOW MACHINERY BRAKES RELEASING
          machineryBrakes();
          setTimeout(function() {
            //BRIDGE OPENING ANIMATION PLAYS
            spanOpen();
            setTimeout(function() {
              //WTF DOES THIS DO???
              spanStop();
              isRunning = false;
              //WTF TIMER
            }, 1250);
            //BRIDGE OPENING TIMER
          }, 1000);
          // MACHINERY BRAKES TIMER
        }, 1000);
        //MOTOR BRAKES TIMER
      }, 1000);
      // TAIL LOCKS TIMER
    },1000);
    //SPAN LOCKS TIMER
  }, 1000);
}


function bridgeExplodes() {
  var path =
    "http://api.giphy.com/v1/gifs/E1q0A3MWQ98I0?api_key=6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv";
  var apiKey = "6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv";

  $.ajax({
    url: path,
    type: "GET"
  }).done(function(response) {
    console.log(response);
  });
}


// // CLOSE BRIDGE FUNCTION
// function runClosingSequence() {
//   setTimeout(function() {
//     //FIGURE OUT WHAT THIS IS
//     spanMotion();
//     setTimeout(function() {
//       // RUN MACHINERY BRAKES
//       machineryBrakes();
//       setTimeout(function() {
//         // RUN MOTOR BRAKES
//         motorBrakes();
//         setTimeout(function() {
//           //RUN TAIL LOCKS
//           tailLocks();
//           setTimeout(function() {
//             //RUN SPAN LOCKS
//             spanLocks();
//             setTimeout(function() {
//               // WTF IS THIS
//               spanStop();
//               //WTF TIMER
//             }, 1000);
//             // SPAN LOCKS TIMER
//           }, 1000);
//           //TAIL LOCKS TIMER
//         }, 1000);
//         //MOTOR BRAKES TIMER
//       }, 1000);
//       // MACHINERY BRAKES TIMER
//     }, 1000);
//     //SPAN CLOSE TIMER????
//   }, 1250);
// }


//SPAN LOCKS FUNCTION
function spanLocks() {
  //CHECK THAT LOCKS ARE DRIVEN
  if ($switch1.text().trim() === "SPAN LOCKS DRIVEN") {
    //UPDATE CLASS AND TEXT
    $switch1.toggleClass("released");
    $switch1.text("SPAN LOCKS PULLED");
    //IF THE LOCKS ARE PULLED
  } else if ($switch1.text().trim() === "SPAN LOCKS PULLED") {
    //UPDATE CLASS AND TEXT
    $switch1.toggleClass("released");
    $switch1.text("SPAN LOCKS DRIVEN");
    //changeover operate button
    $("#operate-button").toggleClass("transition released");
    $("#operate-button").text("OPEN");
  }
}

//SPAN LOCKS FUNCTION
function tailLocks() {
  //CHECK THAT LOCKS ARE DRIVEN
  if ($switch2.text().trim() === "TAIL LOCKS DRIVEN") {
    //UPDATE TEXT AND CLASS
    $switch2.toggleClass("released");
    $switch2.text("TAIL LOCKS PULLED");
  //CHECK THAT LOCKS ARE PULLED
  } else if ($switch2.text().trim() === "TAIL LOCKS PULLED") {
    //UPDATE TEXT AND CLASS
    $switch2.toggleClass("released");
    $switch2.text("TAIL LOCKS DRIVEN");
  }
}


//MOTOR BRAKES FUNCTION
function motorBrakes() {
  //CHECK THAT BRAKES ARE SET
  if ($switch3.text().trim() === "MOTOR BRAKES SET") {
    //UPDATE CLASS AND TEXT
    $switch3.toggleClass("released");
    $switch3.text("MOTOR BRAKES RELEASED");
    //CHECK THAT BRAKES ARE RELEASED
  } else if ($switch3.text().trim() === "MOTOR BRAKES RELEASED") {
    //UPDATE CLASS AND TEXT
    $switch3.toggleClass("released");
    $switch3.text("MOTOR BRAKES SET");
  }
}

//MACHIENRY BRAKES FUNCTION
function machineryBrakes() {
  //CHECK THAT BRAKES ARE SET
  if ($switch4.text().trim() === "MACHINERY BRAKES SET") {
    //UPDATE CLASS AND TEXT
    $switch4.toggleClass("released");
    $switch4.text("MACHINERY BRAKES RELEASED");
    //CHECK THAT BRAKES ARE RELEASED
  } else if ($switch4.text().trim() === "MACHINERY BRAKES RELEASED") {
    //UPDATE CLASS AND TEXT
    $switch4.toggleClass("released");
    $switch4.text("MACHINERY BRAKES SET");
  }
}

//SPAN MOTION FUNCTION??
function spanMotion() {
  $switch5.toggleClass("released transition");
  $switch5.text("BRIDGE MOVING");
  if ((isOpen = true)) {
    animateBridgeOpen();
  } else {
    animateBridgeClose();
  }
}

//SPAN STOP FUNCTION??

function spanStop() {
  if ($switch5.text().trim() === "BRIDGE MOVING" && isOpen === true) {
    // $switch5.toggleClass("released");
    $switch5.toggleClass("transition");
    $switch5.text("BRIDGE OPEN");
    $("#operate-button").text("CLOSE");
    $("#operate-button").toggleClass("transition");
  } else if ($switch5.text().trim() === "BRIDGE MOVING" && isOpen === false) {
    $switch5.toggleClass("released");
    $switch5.text("BRIDGE CLOSED");
    $("#operate-button").text("OPEN");
    $("#operate-button").toggleClass("transition");
  }
}


/* CLOSING SEQUENCE:
1. LOWER BRIDGE ANIMATION
2. REVERSE ORDER FUNCTIONS...
*/
function runClosingSequence() {
  setTimeout(function() {
    animateBridgeClose();
    setTimeout(function() {
      spanStop();
      setTimeout(function() {
        machineryBrakes();
        setTimeout(function() {
          motorBrakes();
          setTimeout(function() {
            tailLocks();
            setTimeout(function() {
              spanLocks();
              isRunning = false;
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1250);
  }, 10);
}

//FUNCTION TO OPEN SPAN

function spanOpen() {

    //update text to moving
    $switch5.text("BRIDGE MOVING");
    //toggle released and transition
    $switch5.toggleClass("released transition")
    //run animation
    animateBridgeOpen();
  
}


function spanClose() {
  
    //update text to moving
    $switch5.text("BRIDGE MOVING");
    //toggle released and transition
    $switch5.toggleClass("released transition")
    //run animation
    animateBridgeClose();
  
}

function spanStop() {
  if ($switch5.text().trim() === "BRIDGE MOVING" && isOpen === true) {
    // $switch5.toggleClass("released");
    $switch5.toggleClass("transition");
    $switch5.text("BRIDGE OPEN");
    $("#operate-button").text("CLOSE");
    $("#operate-button").toggleClass("transition");
  } else if ($switch5.text().trim() === "BRIDGE MOVING" && isOpen === false) {
    $switch5.toggleClass("released");
    $switch5.text("BRIDGE CLOSED");
    $("#operate-button").text("OPEN");
    $("#operate-button").toggleClass("transition");
  }
}
