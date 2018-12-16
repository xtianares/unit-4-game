// global variables
let wins = 0,
    losses = 0,
    targetNumber = "",
    yourNumber = 0;

// get random number between two numbers
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
