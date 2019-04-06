//  create a boolean to prevent double movement of the bridge
var bridgeOpen = false;

//create a variable to hold iterator
var i = 7;

//create a function to animate the bridge
function animateBridgeOpen() {
  //check bridge state

  if (bridgeOpen === false) {
    i = 0;
    $("#bridge-image").attr("src", "assets/images/Bridge1.JPG");
    //loop throught bridge images on an interval
    var bridgeMove = setInterval(function() {
      i++;
      //update the bridge image with the new iteration
      $("#bridge-image").attr("src", "assets/images/Bridge" + i + ".JPG");
      //stop the iteration at 5 (number of bridge images we have)
      if (i === 5) {
        //clear the interval when we hit five
        clearInterval(bridgeMove);
      }
      // set operation speed
    }, 250);
    //change the boolean to prevent double operation
    bridgeOpen = true;
    return i;
  }
}

function animateBridgeClose() {
  i = 5;
  //check bridge state
  if ((bridgeOpen = true)) {
    $("#bridge-image").attr("src", "assets/images/Bridge5.JPG");
    //interval for decrementing through bridge animations
    var bridgeMove = setInterval(function() {
      i--;
      //update bridge image
      $("#bridge-image").attr("src", "assets/images/Bridge" + i + ".JPG");

      //stop animation when bridge image gets to first image
      if (i === 1) {
        clearInterval(bridgeMove);
      }
    }, 250);

    //update bridge state
    bridgeOpen = false;
    return i;
  }
}









function animateLockPull() {
    //loop throught bridge images on an interval
    var D = 0
    var bridgeMove = setInterval(function() {
      D++;

      //update the bridge image with the new iteration
      $("#bridge-image").attr("src", "assets/images/lock" + D + ".JPG");
      //stop the iteration at 5 (number of bridge images we have)
      if (D === 6) {
        //clear the interval when we hit five
        clearInterval(bridgeMove);

      }
      // set operation speed
    }, 200);
}


function animateLockDrive() {
  //check bridge state
    $("#bridge-image").attr("src", "assets/images/lock6.JPG");
    var p = 7;
    console.log(p);
    //loop throught bridge images on an interval
    var bridgeMove = setInterval(function() {
      p--;
      console.log(p);
    //   //update the bridge image with the new iteration
      $("#bridge-image").attr("src", "assets/images/lock" + p + ".JPG");
     //stop the iteration
      if (p === 0) {
        $("#bridge-image").attr("src", "assets/images/Bridge1.JPG");
        //clear the interval 
        clearInterval(bridgeMove);
      }
      // set operation speed
    }, 200);
}



function animateTailLockPull() {
  var D = 0;
  //loop throught bridge images on an interval
  var bridgeMove = setInterval(function() {
    D++;

    //update the bridge image with the new iteration
    $("#bridge-image").attr("src", "assets/images/taillock" + D + ".JPG");
    //stop the iteration at 5 (number of bridge images we have)
    if (D === 6) {
      //clear the interval when we hit five
      clearInterval(bridgeMove);
    
    }
    // set operation speed
  }, 200);
}


function animateTailLockDrive() {
//check bridge state
  $("#bridge-image").attr("src", "assets/images/taillock6.JPG");
  var p = 7;
  console.log(p);
  //loop throught bridge images on an interval
  var bridgeMove = setInterval(function() {
    p--;
    console.log(p);
  //   //update the bridge image with the new iteration
    $("#bridge-image").attr("src", "assets/images/taillock" + p + ".JPG");
  //   //stop the iteration at 6 (number of lock images we have)
    if (p === 1) {

      //clear the interval when we hit five
      clearInterval(bridgeMove);
    }
    // set operation speed
  }, 200);
}


function animateMotorBrakeRelease() {
  var M = 0;
  //loop throught bridge images on an interval
  var bridgeMove = setInterval(function() {
    M++;

    //update the bridge image with the new iteration
    $("#bridge-image").attr("src", "assets/images/motorbrake" + M + ".JPG");
    //stop the iteration at 5 (number of bridge images we have)
    if (M === 2) {
      //clear the interval when we hit five
      clearInterval(bridgeMove);
    
    }
    // set operation speed
  }, 500);
}


function animateMotorBrakeSet() {
//check bridge state
  $("#bridge-image").attr("src", "assets/images/motorbrake2.JPG");
  var p = 2;
  console.log(p);
  //loop throught bridge images on an interval
  var bridgeMove = setInterval(function() {
    p--;
    console.log(p);
  //   //update the bridge image with the new iteration
    $("#bridge-image").attr("src", "assets/images/motorbrake" + p + ".JPG");
  //   //stop the iteration at 6 (number of lock images we have)
    if (p === 1) {

      //clear the interval when we hit five
      clearInterval(bridgeMove);
    }
    // set operation speed
  }, 500);
}



function animateMachineBrakeRelease() {
  var M = 0;
  //loop throught bridge images on an interval
  var bridgeMove = setInterval(function() {
    M++;

    //update the bridge image with the new iteration
    $("#bridge-image").attr("src", "assets/images/machinebrake" + M + ".JPG");
    //stop the iteration at 5 (number of bridge images we have)
    if (M === 2) {
      //clear the interval when we hit five
      clearInterval(bridgeMove);
    
    }
    // set operation speed
  }, 500);
}


function animateMachineBrakeSet() {
//check bridge state
  $("#bridge-image").attr("src", "assets/images/machinebrake2.JPG");
  var p = 2;
  console.log(p);
  //loop throught bridge images on an interval
  var bridgeMove = setInterval(function() {
    p--;
    console.log(p);
  //   //update the bridge image with the new iteration
    $("#bridge-image").attr("src", "assets/images/machinebrake" + p + ".JPG");
  //   //stop the iteration at 6 (number of lock images we have)
    if (p === 1) {

      //clear the interval when we hit five
      clearInterval(bridgeMove);
    }
    // set operation speed
  }, 500);
}

