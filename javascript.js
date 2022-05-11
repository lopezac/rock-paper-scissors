const legalMoves = ["rock", "paper", "scissors"];
const maxNumOfRounds = 5;
let playerWonRounds = 0;
let computerWonRounds = 0;

const buttons = document.querySelectorAll(".buttons>img");
const startGameBtn = document.querySelector("#new-game");
startGameBtn.addEventListener("click", restartGame)

for (btn of buttons) {
    btn.addEventListener('click', (e) => playGame(e.target.className));
}

function playGame(pPlay) {
    if (hasSomeoneWonTheGame()) return;
    playRound(pPlay, computerPlay());
    console.log(`player ${playerWonRounds} computer ${computerWonRounds}`);
    if (hasSomeoneWonTheGame()) {
        showNewGameBtn();
        showGameWinner(); 
    }
}

function playRound(pPlay, cPlay) {
    let roundResult = false;
    if (pPlay === cPlay) {
        console.log('tie');
    } else if (checkIfPlayerWonRound(pPlay, cPlay)) {
        playerWonRounds += 1;
        roundResult = "Player";
    } else {
        computerWonRounds += 1;
        roundResult = "Computer";
    }
    displayRoundResult(pPlay, cPlay, roundResult);
}

function displayRoundResult(pPlay, cPlay, roundResult) {
    const logDiv = document.querySelector(".log");
}

function showNewGameBtn() {
    console.log('new game btn')
}

function showGameWinner() {

}

function restartGame() {
    playerWonRounds = 0;
    computerWonRounds = 0;
    startGameBtn.style.display = "none";
}

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    return legalMoves[randomNum];
}

function getGameWinner() {
    if (playerWonRounds === 5) {
        return "Player";
    } else if (computerWonRounds === 5) {
        return "Computer";
    }
    // return (playerWonRounds === 5) ? "Player" : "Computer";
}

function hasSomeoneWonTheGame() {
    return ((playerWonRounds >= maxNumOfRounds) ||
        (computerWonRounds >= maxNumOfRounds))
}

function checkIfPlayerWonRound(pPlay, cPlay) {
    // pPlay is playerPlay and cPlay is computerPlay
    if ((pPlay === "paper" && cPlay === "rock") || 
    (pPlay === "rock" && cPlay === "scissors") ||
    (pPlay === "scissors" && cPlay === "paper")) {
        return true;
    }
}