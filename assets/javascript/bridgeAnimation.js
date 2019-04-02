
var i = 0;


function animateBridgeOpen () {
    setInterval( function() {
    i++;
    $("#bridge-image").attr("src", "assets/images/bridge"+i+".jpeg")

    }, 1000)
}