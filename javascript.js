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