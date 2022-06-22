const rckBtn = document.querySelector('.rock');
const pprBtn = document.querySelector('.paper');
const scrBtn = document.querySelector('.scissors');
let playerChoice;
let opponentChoice;
let playerScore = 0;
let opponentScore = 0;

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