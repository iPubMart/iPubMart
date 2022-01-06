var counter = 10;
// Set the interval
var intervalId = setInterval(countdown, 1000);
// Run this function at the end of each interval
function countdown() {
 // Display the countdown and then decrement the counter
 console.log(counter--);
 // Cancel the interval when we hit 0
 if (counter < 0) {
 clearInterval(intervalId);
 console.log("All done!");
 }
}