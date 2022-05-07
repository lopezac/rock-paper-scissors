const legalMoves = ["rock", "paper", "scissors"];

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

playerSelection();