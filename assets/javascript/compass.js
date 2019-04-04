// Global variable
var img = null,
	needle = null,
	ctx = null
	degrees = null;


// degrees=windDegrees;


function clearCanvas() {
	 // clear canvas
	ctx.clearRect(0, 0, 110, 110);
}

function draw() {

	clearCanvas();

	// Draw the compass onto the canvas
	ctx.drawImage(img, 0, 0);

	// Save the current drawing state
	ctx.save();

	// Now move across and down half the 
	ctx.translate(55, 55);

	// Rotate around this point
	ctx.rotate(degrees * (Math.PI / 180));

	// Draw the image back and up
	ctx.drawImage(needle, -55, -55);

	// Restore the previous drawing state
	ctx.restore();

	// Increment the angle of the needle by 5 degrees
	// degrees += 5;
}

function imgLoaded() {
	// Image loaded event complete.  Start the timer
	setInterval(draw, 100);
}

function init() {
	// Grab the compass element
	var canvas = document.getElementById('compass');

	// Canvas supported?
	if (canvas.getContext('2d')) {
		ctx = canvas.getContext('2d');

		// Load the needle image
		needle = new Image();
		needle.src = '../assets/images/smallNeedle.png';

		// Load the compass image
		img = new Image();
		img.src = '../assets/images/smallCompass.png';
		img.onload = imgLoaded;
	} else {
		alert("Canvas not supported!");
	}
}