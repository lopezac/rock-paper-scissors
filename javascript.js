const legalMoves = ["rock", "paper", "scissors"];
const maxNumOfRounds = 5;
let playerWonRounds = 0;
let computerWonRounds = 0;

function playerSelection() {
    let userInput = prompt("Enter your move: ");

    while (!checkIfValidPlay(userInput)) {
        userInput = prompt("Enter a valid move: ");
    }

    return userInput;
}

function computerSelection() {
    let randomNum = Math.floor(Math.random() * 3);
    return legalMoves[randomNum];
}

function checkIfValidPlay(play) {
    if ((play === null) || !(legalMoves.includes(play.toLowerCase()))) {
        return false;
    }

    return true;
}

function displayGameWinner(winner) {
    alert(`${winner} won the game!`);
}

function checkIfPlayerWonRound(pPlay, cPlay) {
    // pPlay is playerPlay and cPlay is computerPlay
    if ((pPlay === "paper" && cPlay === "rock") || 
    (pPlay === "rock" && cPlay === "scissors") ||
    (pPlay === "scissors" && cPlay === "paper")) {
        return true;
    }
}

function displayComputerWonRoundMsg(pPlay, cPlay) {
    alert(`The Computer won the round! ${cPlay} beats ${pPlay}!`);
}

function displayPlayerWonRoundMsg(pPlay, cPlay) {
    alert(`You won the round! ${pPlay} beats ${cPlay}!`);
}

function displayTieRoundMsg(pPlay, cPlay) {
    alert(`The round was tied! ${pPlay} ties with ${pPlay}!`);
}

function decideRoundResult(pPlay, cPlay) {
    if (pPlay === cPlay) {
        displayTieRoundMsg(pPlay, cPlay);
    } else if (checkIfPlayerWonRound(pPlay, cPlay)) {
        displayPlayerWonRoundMsg(pPlay, cPlay);
        playerWonRounds += 1;
    } else {
        displayComputerWonRoundMsg(pPlay, cPlay);
        computerWonRounds += 1;
    }
}