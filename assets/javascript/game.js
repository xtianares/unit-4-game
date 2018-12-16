// global variables
let wins = 0,
    losses = 0,
    targetNumber = 0, // should be between 19 and 120
    yourNumber = 0;

const game = {
    // get random number between two numbers
    getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    init: function() {
        // setting the targetNumber
        targetNumber = this.getRandomNumber(19, 120);
        yourNumber = 0;
        $('.target-number').text(targetNumber);
        $('.your-number').text(yourNumber);
        $('.crystal-container').empty();
        let crystals = '';
        // since there are only 4 crystals, loop will start with 1 and end in 4
        for(var i = 1; i < 5; i++) {
            let crystalValue = this.getRandomNumber(1, 12);
            crystals += `<div class="col-6 col-sm-3 col-md-3 crystal-col">
                                <img class="crystal-img" src="assets/images/crystal-${i}.png" data-value="${crystalValue}">
                            </div>`;
        }
        $('.crystal-container').append(crystals);
    },
    win: function() {
        wins++;
        let result = `<div>
                        <h2 class="h1 mb-0">You Win!</h2>
                        <p class="mb-0">Starting a new game...</p>
                    </div>`;
        $('.crystal-container').html(result);
        $('.win-count').text(wins);
        setTimeout(function() {
            game.init();
        }, 1200);
    },
    lose: function() {
        losses++;
        let result = `<div>
                        <h2 class="h1 mb-0">You Lose!</h2>
                        <p class="mb-0">Starting a new game...</p>
                    </div>`;
        $('.crystal-container').html(result);
        $('.loss-count').text(losses);
        setTimeout(function() {
            game.init();
        }, 1200);
    }
}
game.init();

$(document).on('click', '.crystal-img', function() {
    let crystalValue = ($(this).attr('data-value'));
        crystalValue = parseInt(crystalValue);
        yourNumber += crystalValue;
    //console.log(yourNumber)
    $('.your-number').text(yourNumber);

    if (targetNumber === yourNumber) {
        game.win();
    }
    else if (targetNumber < yourNumber){
        game.lose();
    }
});
