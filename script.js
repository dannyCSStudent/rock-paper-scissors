let playerCount = 0;
let computerCount = 0;
let gameCount = 0;
let roundCount = 0;


function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "play":
                play()
                reset();
                break;
            case "rock":
                updateScore(button.id);
                break;
            case "paper":
                updateScore(button.id)
                break;
            case "scissors":
                updateScore(button.id)
                break;
            case "computer":
                updateScore(button.id)
                break;
        }         
    });
});

function updateScore(player) {
    gameCount++;
    document.getElementById("round").textContent = `Round: ${gameCount + 1}`;
    let computer = getComputerChoice();
    if (playRound(player, computer) === true) {
        computerCount++;
        document.getElementById("computer").textContent = `${computer}`;
        document.getElementById("score").textContent = `${playerCount} - ${computerCount}`;
        document.getElementById("player-board").textContent = "Loser";
        document.getElementById("computer-board").textContent = "Winner";
    }

    else if (playRound(player, computer) === false) {
        playerCount++;
        document.getElementById("computer").textContent = `${computer}`;
        document.getElementById("score").textContent = `${playerCount} - ${computerCount}`;
        document.getElementById("player-board").textContent = "Winner";
        document.getElementById("computer-board").textContent = "Loser";    
    }
    else {
        document.getElementById("computer").textContent = `${computer}`;
        document.getElementById("score").textContent = `${playerCount} - ${computerCount}`;
        document.getElementById("player-board").textContent = "Tie";
        document.getElementById("computer-board").textContent = "Tie";
    }
    if (playerCount === 5 || computerCount === 5) {
        disableButtons();
        document.getElementById("game-label").textContent = "Game Over";
        document.getElementById("play").textContent = "Play Again";
        if (playerCount > computerCount) {
            document.getElementById("round").textContent = "You Win!";
            document.getElementById("player-board").textContent = "Winner";
            document.getElementById("computer-board").textContent = "Loser";
        }
        else if (playerCount < computerCount) {
            document.getElementById("round").textContent = "You Lose!";
            document.getElementById("computer-board").textContent = "Winner";
            document.getElementById("player-board").textContent = "Loser";
        }
        else {
            document.getElementById("round").textContent = "Tie";
            document.getElementById("computer-board").textContent = "Tie";
            document.getElementById("player-board").textContent = "tie";
        }
        document.getElementById("play").disabled = false;
    }
}

function reset() {
    document.getElementById("score").textContent = "0 - 0";
    document.getElementById("round").textContent = "Round: 0";
    document.getElementById("game-label").textContent = "Play 5 Rounds";
    document.getElementById("player-board").textContent = "You";
    document.getElementById("computer-board").textContent = "Computer";
    clearCounters();
}


function play() {
    document.getElementById("play").disabled = true;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("game-label").textContent = "Play 5 Round";
    document.getElementById("round").textContent = "Round: 1";
    document.getElementById("player-board").textContent = "You";
    document.getElementById("computer-board").contains = "Computer";
    document.getElementById("rock").style.border = "2px solid green";
    document.getElementById("paper").style.border = "2px solid green";
    document.getElementById("scissors").style.border = "2px solid green";
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let roll = Math.floor(Math.random() * 3);
    let computerChoice = choices[roll];
    return computerChoice
}

function clearCounters() {
    playerCount = 0;
    computerCount = 0;
    gameCount = 0;
    roundCount = 0;
}

function playRound(PlayerSelection, ComputerSelection) {
    if (PlayerSelection === "rock" && ComputerSelection === "paper") {
        return true;
    }
    else if (PlayerSelection === "rock" && ComputerSelection === "scissors") {
        return false;
    }
    else if (PlayerSelection === "paper" && ComputerSelection === "scissors") {
        return true;
    }
    else if (PlayerSelection === "paper" && ComputerSelection === "rock") {
        
        return false;
    }
    else if (PlayerSelection === "scissors" && ComputerSelection === "rock") {
        return true;
    }
    else if (PlayerSelection === "scissors" && ComputerSelection === "paper") {
        
        return false;
    }

}

disableButtons();
