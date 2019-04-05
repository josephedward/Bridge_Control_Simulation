//  create a boolean to prevent double movement of the bridge
var bridgeOpen = false;

//create a variable to hold iterator
var i = 1;
//create a function to animate the bridge
function animateBridgeOpen() {
  //check bridge state

  if (bridgeOpen === false) {

    //loop throught bridge images on an interval
    var bridgeMove = setInterval(function() {
      i++;
      //update the bridge image with the new iteration
      $("#bridge-image").attr("src", "assets/images/Bridge" + i + ".JPG");
      //stop the iteration at 5 (number of bridge images we have)
      if (i === 5) {
        //clear the interval when we hit five
        clearInterval(bridgeMove);
        $switch5.text("BRIDGE OPEN");
        bridgeOpen = true;
        $switch5.toggleClass("transition")
        $("#operate-button").toggleClass("transition");
        $("#operate-button").text("CLOSE");
      }
      // set operation speed
    }, 250);
    //change the boolean to prevent double operation
    
    return i;
  }
} 

function animateBridgeClose() {
  //check bridge state
  if ((bridgeOpen = true)) {
    //interval for decrementing through bridge animations
    var bridgeMove = setInterval(function() {
      i--;
      //update bridge image
      $("#bridge-image").attr("src", "assets/images/Bridge" + i + ".JPG");

      //stop animation when bridge image gets to first image
      if (i === 1) {
        clearInterval(bridgeMove);
        $switch5.text("BRIDGE CLOSED");
        bridgeOpen = false;
        $switch5.toggleClass("released")
        
      }
    }, 250);

    return i;
  }
}
