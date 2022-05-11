const legalMoves = ["rock", "paper", "scissors"];
const maxNumOfRounds = 5;
let playerWonRounds = 0;
let computerWonRounds = 0;

const buttons = document.querySelectorAll(".buttons>img");
const newGameBtn = document.querySelector("#new-game");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const logDiv = document.querySelector(".log");
newGameBtn.addEventListener("click", restartGame)

for (btn of buttons) {
    btn.addEventListener('click', (e) => playGame(e.target.className));
}

function playGame(pPlay) {
    if (hasSomeoneWonTheGame()) return;
    playRound(pPlay, computerPlay());
    if (hasSomeoneWonTheGame()) {
        showNewGameBtn();
        showGameWinner(); 
    }
}

function playRound(pPlay, cPlay) {
    let roundWinner = false;
    if (pPlay === cPlay) {
    } else if (checkIfPlayerWonRound(pPlay, cPlay)) {
        playerWonRounds += 1;
        roundWinner = "Player";
    } else {
        computerWonRounds += 1;
        roundWinner = "Computer";
    }
    displayRoundResult(pPlay, cPlay, roundWinner);
    updateScore();
}

function updateScore() {
    playerScore.textContent = playerWonRounds;
    computerScore.textContent = computerWonRounds;
}

function displayRoundResult(pPlay, cPlay, roundWinner) {
    const roundDiv = document.createElement("div");
    const playerImg = document.createElement("img");
    const computerImg = document.createElement("img");
    const roundResult = document.createElement("p");

    playerImg.src = `images/${pPlay}.png`;
    computerImg.src = `images/${cPlay}.png`;
    roundDiv.className = "round";
    
    if (roundWinner === "Player") {
        roundResult.textContent = "beats";
    } else if (roundWinner === "Computer") {
        roundResult.textContent = "loses";
    } else {
        roundResult.textContent = "ties";
    }

    roundDiv.appendChild(playerImg);
    roundDiv.appendChild(roundResult);
    roundDiv.appendChild(computerImg);
    logDiv.appendChild(roundDiv);
}

function showNewGameBtn() {
    newGameBtn.style.display = "flex";
}

function clearLog() {
    const rounds = document.querySelectorAll(".round");
    for (round of rounds) {
        round.parentNode.removeChild(round);
    }
}

function clearScore() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

function showGameWinner() {
    let gameWinner = getGameWinner();
    const pDiv = document.createElement("p");

    pDiv.textContent = `${gameWinner} won the game!`;
    pDiv.className = "round";
    pDiv.style.fontSize = "48px";
    pDiv.style.fontWeight = "bold";
    logDiv.appendChild(pDiv);
}

function restartGame() {
    playerWonRounds = 0;
    computerWonRounds = 0;
    newGameBtn.style.display = "none";
    clearLog();
    clearScore();
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