
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let roll = Math.floor(Math.random() * 3);
    let computerChoice = choices[roll];
    return computerChoice
}


function getPlayerChoice() {
    let playerChoice = prompt("What is your weapon of choice? ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice
}

function playRound(PlayerSelection, ComputerSelection) {
    console.log(`You choose ${PlayerSelection}, the computer choose ${ComputerSelection}`)

    if (PlayerSelection === "rock" && ComputerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (PlayerSelection === "rock" && ComputerSelection === "scissors") {
        winCount++;
        return "You Win! Rock beats Scissors"
    }
    else if (PlayerSelection === "paper" && ComputerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    else if (PlayerSelection === "paper" && ComputerSelection === "rock") {
        winCount++;
        return "You Win! Paper beats Rock"
    }
    else if (PlayerSelection === "scissors" && ComputerSelection === "rock") {
        return "You Lose! Rock beats scissors"
    }
    else if (PlayerSelection === "scissors" && ComputerSelection === "paper") {
        winCount++;
        return "You Win! Scissors beats Paper"
    }
    else {
        return "Tie!"
    }
}

function winLoseOutcome(winnerCount) {
    let loserCount = 5 - winnerCount;
    if (winnerCount > loserCount) {
        return `Game Over! You win ${winnerCount} to ${loserCount}`
    }
    else if (winnerCount < loserCount) {
        return `Game Over! You lose ${winnerCount} to ${loserCount}`
    }
    else {
        return `Game Over! It is a tie ${winnerCount} to ${loserCount}`
    }
}

function game() {
    

    for (let i = 0; i < 5; i++) {
        const player = getPlayerChoice();
        const computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
    console.log(winLoseOutcome(winCount));
}


let winCount = 0;
game();