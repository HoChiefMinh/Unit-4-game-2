
let target_score;
let wins = 0;
let losses = 0;
let previous = 0;

let resetAndStart = function () {
    
    // emptys crystals
    $(".crystals").empty();

    let images = [
        "assets/images/rainbow.png",
        "assets/images/shadow.png",
        "assets/images/quartz.png",
        "assets/images/sunbeam.png"
    ];

    // generates new random result
    target_score = Math.floor(Math.random() * 102) + 19;

    // adding target score to the DOM
    $("#harvest-limit").html('Harvesting Limit: ' + target_score);

    // Loops 4 times 
    for (let i = 0; i < 4; i++) {

        // creating and assigning each crystal with a random number
        var random = Math.floor(Math.random() * 12) + 1;
    
        // creates new div for each crystal and random number 
        var crystal = $("<div>");

        // adding attribute to each crystal
            crystal.attr({  
                "class": 'crystal',
                "randomCrystalNum": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size": "cover"
            })

        $(".crystals").append(crystal);

    }

    $("#score").html("Current power level: " + previous);
}

// calls on the resetAndStart function
resetAndStart();

$(document).on('click', ".crystal", function() {

    let num = parseInt($(this).attr("randomCrystalNum"));

    previous += num;

    $("#score").html("Current power level: " + previous);

    console.log(previous);

    if (previous > target_score) {
        
        losses++;
 
        $("#losses").html("Losses: " + losses);
 
        previous = 0;

        resetAndStart();
    }
   else if (previous === target_score){
    
    wins++;

    $("#wins").html("Wins: " + wins);

    previous = 0;

    resetAndStart();

   }


})

// Pseudo Code

// Four crystals display on page, and are assigned a random number (1-12)x
// The random number shown at the start of the game should be between (19 - 120)x
// to the crystals, and at the start of each new game x
// Each click of the crystals should add onto previous result x
// until equal to random number x
// If greater than the Randomly result, we drcrement the loss counter 
// If equal, then we increment the win counter 
// new random number should be generated everytime we win or lose





  

