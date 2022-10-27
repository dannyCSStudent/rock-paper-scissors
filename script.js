let playerCount = 0;
let computerCount = 0;
let gameCount = 0;
let roundCount = 0;


function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("computer-pick").disabled = true;
    document.getElementById("play").textContent = "Play";
    document.getElementById("play").style.border = "1px solid aquamarine";
    document.getElementById("rock").style.border = "1px solid aquamarine";
    document.getElementById("paper").style.border = "1px solid aquamarine";
    document.getElementById("scissors").style.border = "1px solid aquamarine";
    document.getElementById("computer-pick").style.border = "1px solid aquamarine";
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
                document.getElementById("rock").style.border = "1px solid aquamarine";
                document.getElementById("paper").style.border = "0";
                document.getElementById("scissors").style.border = "0";
                updateScore(button.id);
                break;
            case "paper":
                document.getElementById("rock").style.border = "0";
                document.getElementById("paper").style.border = "1px solid aquamarine";
                document.getElementById("scissors").style.border = "0";
                updateScore(button.id)
                break;
            case "scissors":
                document.getElementById("rock").style.border = "0";
                document.getElementById("paper").style.border = "0";
                document.getElementById("scissors").style.border = "1px solid aquamarine";
                updateScore(button.id)
                break;
        }         
    });
});

function updateScore(player) {
    gameCount++;
    
    document.getElementById("game-label").textContent = `Round: ${gameCount + 1}`;
    let computer = getComputerChoice();
    document.getElementById("computer-pick").textContent =  computer;
    document.getElementById("computer-pick").style.border = "1px solid aquamarine";
    if (playRound(player, computer) === true) {
        // computer won
        computerCount++;
        document.getElementById("score").textContent = `${playerCount} - ${computerCount}`;
        document.getElementById("player").textContent = "Loser";
        document.getElementById("computer").textContent = "Winner";
    }

    else if (playRound(player, computer) === false) {
        // player won
        playerCount++;
        document.getElementById("player").textContent = "Winner";
        document.getElementById("computer").textContent = "Loser";  
        document.getElementById("score").textContent = `${playerCount} - ${computerCount}`;
          
    }
    else {
        // tie        
        document.getElementById("score").textContent = `${playerCount} - ${computerCount}`;
        document.getElementById("player").textContent = "Tie";
        document.getElementById("computer").textContent = "Tie";
    }
    if (playerCount === 5 || computerCount === 5) {
        disableButtons();
        clearCounters();
        document.getElementById("game-label").textContent = "Game Over";
        document.getElementById("play").textContent = "Play Again";
        document.getElementById("play").disabled = false;
        if (playerCount > computerCount) {
            document.getElementById("player").textContent = "Winner";
            document.getElementById("computer").textContent = "Loser";
        }
        else {
            document.getElementById("computer").textContent = "Winner";
            document.getElementById("player").textContent = "Loser";
        }
        
    }
}

function reset() {
    pic();
    document.getElementsByName("computer-pick").textContent = "Thinking";
    document.getElementById("score").textContent = "0 - 0";
    document.getElementById("computer-pick").textContent = "Thinking";
    document.getElementById("game-label").textContent = "Win 5 Rounds";
    document.getElementById("player").textContent = "You";
    document.getElementById("computer").textContent = "Computer";
    clearCounters();

}


function play() {
    document.getElementById("play").style.border = "1px solid blue";
    document.getElementById("rock").style.border = "1px solid aquamarine";
    document.getElementById("paper").style.border = "1px solid aquamarine";
    document.getElementById("scissors").style.border = "1px solid aquamarine";
    document.getElementById("computer-pick").style.border = "1px solid aquamarine";

    document.getElementById("play").disabled = true;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("game-label").textContent = "Round 1";
    document.getElementById("play").textContent = "Play";
    document.getElementById("player").textContent = "You"
    document.getElementById("computer").textContent = "Computer";
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let roll = Math.floor(Math.random() * 3);
    let computerChoice = choices[roll];
    return computerChoice
}

function pic() {

    const choice = [
        "./images/peru-1460618_1920.jpg", 
        "./images/brazil-305531_1280.png",
        "./images/japan-1460334_1920.jpg",
        "./images/chili-1460323_1920.jpg",
        "./images/romania-1460575_1920.jpg"
    ];
    $("#container").css({
        "background": "url("+choice[Math.floor(Math.random() *
            choice.length)] +") no-repeat",
            "background-position":"100%",
            "background-size":"cover"
    });
}
function clearCounters() {
    playerCount = 0;
    computerCount = 0;
    gameCount = 0;
    roundCount = 0;
}

function playRound(PlayerSelection, ComputerSelection) {
    
    if (PlayerSelection === "rock" && ComputerSelection === "Paper") {
        return true;
    }
    else if (PlayerSelection === "rock" && ComputerSelection === "Scissors") {
        return false;
    }
    else if (PlayerSelection === "paper" && ComputerSelection === "Scissors") {
        return true;
    }
    else if (PlayerSelection === "paper" && ComputerSelection === "Rock") {
        
        return false;
    }
    else if (PlayerSelection === "scissors" && ComputerSelection === "Rock") {
        return true;
    }
    else if (PlayerSelection === "scissors" && ComputerSelection === "Paper") {
        
        return false;
    }

}

disableButtons();
