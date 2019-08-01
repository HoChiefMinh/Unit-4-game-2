// Pseudo Code

// The random number shown at the start of the game should be between (19 - 120)
// Four crystals display on page, and are assigned a random number (1-12)
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
    var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);
    var crystal = $('<div>');
        crystal.attr({
            'class': 'crystal',
            'data-random': random
        });

    $('.crystals').append(crystal);
   
}

});