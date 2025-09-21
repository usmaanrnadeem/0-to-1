function getComputerChoice() {
    let x = Math.random()
    if (x<0.34) {
        return "rock"
    }
    else if (x<0.67) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let x = prompt("Please enter your move: ")
    return x.toLowerCase()
}

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (computerChoice, humanChoice) {
        if (computerChoice == humanChoice) {
            return "This round was a draw!"
        }
        else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper") {
            ++computerScore;
            return `You lose! ${computerChoice} beats ${humanChoice}.}`
        }
        else {
            ++humanScore;
            return `You win! ${humanChoice} beats ${computerChoice}.`
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(),getHumanChoice()));
    }

    if (humanScore > computerScore) {
        return `Congratulations! You won with a score of ${humanScore} - ${computerScore}`
    }
    else if (humanScore < computerScore) {
        return `Unlucky! You lost with a score of ${computerScore} - ${humanScore}`
    }
    else {
        return `Draw! The final score was ${computerScore} - ${humanScore}`
    }
}

console.log(playGame())
