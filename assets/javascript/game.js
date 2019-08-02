// Pseudo Code

// The random number shown at the start of the game should be between (19 - 120)x
// Four crystals display on page, and are assigned a random number (1-12)x
// to the crystals, and at the start of each new game x
// Each click of the crystals should add onto previous result x
// until equal to random number x
// If greater than the Randomly result, we drcrement the loss counter x
// If equal, then we increment the win counter x
// new random number should be generated everytime we win or lose

// Exectutes the JS when the HTML is done loading 
$(document).ready(function() {

// Global Variable 
let loss= 0;
$('#losses').text('Losses: ' + loss);

let win = 0;
$('#wins').text('Wins: ' + win);

let userScore = 0;
$('#total-score').text('You Gems: ' + userScore);

let winningAmount = Math.floor(Math.random() * 101) + 19;
$('target').text('Your Gems: ' + winningAmount);
    
var resetGame = function () {

    $('.crystals').empty();

    randomNum = Math.floor(Math.random() * 101) + 19;

    $('#target').html('Your target: ' + randomNum);

    for (i = 0; i < 4; i++) {
        
        let random = Math.floor(Math.random() * 12) + 1;

        let crystal = $('<div>');
            crystal.attr({
                'class': 'crystal',
                'data-random': random
            });

            crystal.html(random);

        $('.crystals').append(crystal);
    
    }

    $('#total-score').text('You Gems: ' + userScore);
}

resetGame();


// event delagation
$(document).on('click', '.crystal', function() {

    var num = parseInt($(this).attr('data-random'));

    userScore += num;

    $('#total-score').text('You Gems: ' + userScore);

    console.log(userScore);

    if (userScore > randomNum) {

        loss--;

         $('#losses').text('Losses: ', loss);

         userScore = 0;

        resetGame();
}
    else if (userScore === randomNum) {

        win++;

        $('#wins').text('Wins: ', win);

        userScore = 0;

        resetGame();

    }

});
});
