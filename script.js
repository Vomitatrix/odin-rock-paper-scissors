const rckBtn = document.querySelector('.rock');
const pprBtn = document.querySelector('.paper');
const scrBtn = document.querySelector('.scissors');
let resetBtn;
let playerChoice;
let opponentChoice;
let playerScore = 0;
let opponentScore = 0;
let currentRound = 0;
let choices = ['Rock', 'Paper', 'Scissors'];

// Simple message to be displayed at the beginning of the game
console.log('Reach 5 points first to win!');

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

// A random number between 0 and 2 is generated for the opponent, each corresponding to either
// rock, paper, or scissors, just like the player's
function opponentTurn() {
    opponentChoice = Math.floor(Math.random() * 3);
    displayRound();
    compareChoices();
    checkScore();
}

// After each round the value 'round' increases by 1
function displayRound() {
    currentRound = currentRound + 1;
    console.log(`Round ${currentRound}`);
}

// opponentChoice is compared to playerChoice, if they are the equal, it's a tie
// If they are not, they are compared until the outcome is found
// Then the winner gets a point, and all is printed out in the console
function compareChoices() {
    console.log(`You chose: ${choices[playerChoice]} | Opponent chose: ${choices[opponentChoice]}`);
    
    if (opponentChoice == playerChoice) {
        console.log('TIE!');
        console.log(`Your score: ${playerScore} | Opponent's score: ${opponentScore}`);
    } else if (opponentChoice == 0) {
        if (playerChoice == 1) {
            playerScore += 1;
            console.log('You win this round!');
            console.log(`Your score: ${playerScore} | Opponent's score: ${opponentScore}`);
        } else {
            opponentScore += 1;
            console.log('You lose this round!');
            console.log(`Your score: ${playerScore} | Opponent's score: ${opponentScore}`);
        }
    } else if (opponentChoice == 1) {
        if (playerChoice == 0) {
            opponentScore += 1;
            console.log('You lose this round!');
            console.log(`Your score: ${playerScore} | Opponent's score: ${opponentScore}`);
        } else {
            playerScore += 1;
            console.log('You win this round!');
            console.log(`Your score: ${playerScore} | Opponent's score: ${opponentScore}`);
        }
    } else {
        if (playerChoice == 0) {
            playerScore += 1;
            console.log('You win this round!');
            console.log(`Your score: ${playerScore} | Opponent's score: ${opponentScore}`);
        } else {
            opponentScore += 1;
            console.log('You lose this round!');
            console.log(`Your score: ${playerScore} | Opponent's score: ${opponentScore}`);
        }
    }
    console.log('');
}

// Once the player or the opponent reaches 5 points, buttons are disabled, a new button is created
// to reset the game, and an end screen message displays whether the player won or lost
function checkScore() {
    if (playerScore == 5 || opponentScore == 5) {
        rckBtn.disabled = true;
        pprBtn.disabled = true;
        scrBtn.disabled = true;
        resetBtn = document.createElement('button');
        resetBtn.textContent = 'Restart';
        document.body.appendChild(resetBtn);
        resetBtn.addEventListener('click', resetGame);
        endScreen();
    }
}

// When the newly created reset button is pressed, scores and round are reset, buttons reactivated,
// reset button removed, the console is cleared, and a new game message is displayed
function resetGame() {
    playerScore = 0;
    opponentScore = 0;
    currentRound = 0;
    rckBtn.disabled = false;
    pprBtn.disabled = false;
    scrBtn.disabled = false;
    resetBtn.parentNode.removeChild(resetBtn);
    console.clear();
    console.log('Reach 5 points first to win!');
}

// Displays a message depending on whether the player won or lost
function endScreen() {
    if (playerScore > opponentScore) {
        console.log(`You won the game and it only took you ${currentRound} rounds!`);
    } else {
        console.log(`You lost the game, and it only took you ${currentRound} rounds.`);
    }
}