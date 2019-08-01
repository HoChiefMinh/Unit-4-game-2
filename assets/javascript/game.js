// Pseudo Code

// Four crystals display on page, and random result (19-120)
// New random number should be generated everytime player wins/loses (1-12)
// to the crystals, and at the start of each new game
// Each click of the crystals should add onto previous result
// until equal to random number
// If greater than the Randomly result, we drcrement the loss counter
// If equal, then we increment the win counter

// Exectutes the JS when the HTML is done loading 
$(document).ready(function() {

    // Global Variable 
var randomNum;
var loss;
var win;

for (i = 0; i < 4; i++) {
    
    var crystal = $('<div>');

    $('.crystals').append(crystal);
   
}

});