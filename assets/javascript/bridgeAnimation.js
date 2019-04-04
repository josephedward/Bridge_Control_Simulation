var bridgeOpen = false;
var i = 1;

function animateBridgeOpen () {
    var bridgeMove = setInterval( function() {
    i++;
    
    $("#bridge-image").attr("src", "assets/images/Bridge"+i+".JPG");
    if (i === 5) {
        clearInterval(bridgeMove);
    }
    console.log(i);
    }, 250)
    bridgeOpen = true;
    return i;

}


function animateBridgeClose () {
    var bridgeMove = setInterval( function() {
    i--;
    
    $("#bridge-image").attr("src", "assets/images/Bridge"+i+".JPG")
    if (i === 1) {
        clearInterval(bridgeMove);
    }
    console.log(i);
    }, 250)
    bridgeOpen = false;
    return i;
}


