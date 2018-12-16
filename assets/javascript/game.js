// global variables
let wins = 0,
    losses = 0,
    targetNumber = 0, // should be between 19 and 120
    yourNumber = 0;

// get random number between two numbers
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function init() {
    // setting the targetNumber
    targetNumber = getRandomNumber(19, 120);
    yourNumber = 0;
    $('.target-number').text(targetNumber);
    $('.your-number').text(yourNumber);
    $(".crystal-container").html('');

    // since there are only 4 crystals, loop will start with 1
    for(var i = 1; i < 5; i++) {
        let crystalValue = getRandomNumber(1, 12);
        let crystals = `<div class="col-6 col-sm-3 col-md-3 crystal-col">
                            <img class="crystal-img" src="assets/images/crystal-${i}.png" data-value="${crystalValue}">
                        </div>`;
        $(".crystal-container").append(crystals);
    }
}
init();

function win() {
    wins++;
    let result = `<div>
                    <h2 class="h1 mb-0">You Win!</h2>
                    <p class="mb-0">Starting a new game...</p>
                </div>`;
    $(".crystal-container").html(result);
    $(".win-count").text(wins);
    // addind setTimeout to allow for animation to finish
    setTimeout(function() {
        init();
    }, 1000);
}
function lose() {
    losses++;
    let result = `<div>
                    <h2 class="h1 mb-0">You Lose!</h2>
                    <p class="mb-0">Starting a new game...</p>
                </div>`;
    $(".crystal-container").html(result);
    $(".loss-count").text(losses);
    setTimeout(function() {
        init();
    }, 1000);
}

$(document).on("click", ".crystal-img", function() {
	let crystalValue = ($(this).attr("data-value"));
    	crystalValue = parseInt(crystalValue);
    	yourNumber += crystalValue;
    //console.log(yourNumber)
    $('.your-number').text(yourNumber);

	if (targetNumber === yourNumber) {
		win();
	}
	else if (targetNumber < yourNumber){
		lose();
	}
});
