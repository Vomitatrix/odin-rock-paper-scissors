const rckBtn = document.querySelector('.rock');
const pprBtn = document.querySelector('.paper');
const scrBtn = document.querySelector('.scissors');
let playerChoice;
let opponentChoice;
let playerScore = 0;
let opponentScore = 0;

// Depending on which button is pressed, playerChoice will be assigned a value between 0 and 2
// corresponding to rock, paper, or scissors

rckBtn.addEventListener('click', () => {
    playerChoice = 0;
    opponentTurn();
});

pprBtn.addEventListener('click', () => {
    playerChoice = 1;
    opponentTurn();
});

scrBtn.addEventListener('click', () => {
    playerChoice = 2;
    opponentTurn();
});

// A random number between 0 and 2 is generated for the opponent,
// each corresponding to either rock, paper, or scissors, just
// like the player's
// Then it's compared with playerChoice, if they are the equal, it's a tie
// If they are not, they are compared until the outcome is found
// Then the winner gets a point, and all is printed out in the console

function opponentTurn() {
    opponentChoice = Math.floor(Math.random() * 3);
    
    if (opponentChoice == playerChoice) {
        console.log('TIE!');
        console.log(`Your score: ${playerScore}`);
        console.log(`Opponent's score: ${opponentScore}`);
        console.log(' ');
    } else if (opponentChoice == 0) {
        if (playerChoice == 1) {
            playerScore += 1;
            console.log('You win!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${opponentScore}`);
            console.log(' ');
        } else {
            opponentScore += 1;
            console.log('You lose!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${opponentScore}`);
            console.log(' ');
        }
    } else if (opponentChoice == 1) {
        if (playerChoice == 0) {
            opponentScore += 1;
            console.log('You lose!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${opponentScore}`);
            console.log(' ');
        } else {
            playerScore += 1;
            console.log('You win!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${opponentScore}`);
            console.log(' ');
        }
    } else {
        if (playerChoice == 0) {
            playerScore += 1;
            console.log('You win!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${opponentScore}`);
            console.log(' ');
        } else {
            opponentScore += 1;
            console.log('You lose!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Opponent's score: ${opponentScore}`);
            console.log(' ');
        }
    }
}