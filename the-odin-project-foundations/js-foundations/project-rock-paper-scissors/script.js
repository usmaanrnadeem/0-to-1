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

function playRound (computerChoice, humanChoice) {

    if (playerMoveBox.hasChildNodes || compMoveBox.hasChildNodes) {
        playerMoveBox.replaceChildren()
        compMoveBox.replaceChildren()
    }

    let roundResult;
    
    const playerMove = document.createElement("p");
    playerMove.textContent = humanChoice;

    const computerMove = document.createElement("p");
    computerMove.textContent = computerChoice;

    playerMoveBox.appendChild(playerMove);
    compMoveBox.appendChild(computerMove);

    if (computerChoice == humanChoice) {
        roundResult = "This round was a draw!"
    }
    else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper") {
        ++computerScore;
        computerScoreCounter.textContent = `Computer's Score: ${computerScore}`;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}.}`
    }
    else {
        ++humanScore;
        humanScoreCounter.textContent = `Your Score: ${humanScore}`
        roundResult = `You win! ${humanChoice} beats ${computerChoice}.`
    }

    if (computerScore == 5 || humanScore == 5) {
        const winner = document.createElement("h1");
        if (computerScore == 5) {
            winner.textContent = "Computer Wins!"
        }  else {
            winner.textContent = "You Win!"
        }
        results.appendChild(winner)

    return roundResult

    }
}


let humanScore = 0;
let computerScore = 0;

const selection = document.querySelector(".selection");
const playerMoveBox = document.querySelector(".selection .player");
const compMoveBox = document.querySelector(".selection .comp")

console.log(playerMoveBox)

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");

const humanScoreCounter = document.querySelector(".hScore");
const computerScoreCounter = document.querySelector(".cScore");

const results = document.querySelector(".results");

const reset = document.querySelector(".reset button")

if (humanScore == 0) {
    humanScoreCounter.textContent = "Your Score: 0"
}

if (computerScore == 0) {
    computerScoreCounter.textContent = "Computer's Score: 0"
}

rock.addEventListener("click", event => {
    if (computerScore < 5 && humanScore < 5) {
        playRound(getComputerChoice(),event.target.textContent)
    }
});

paper.addEventListener("click", event => {
    if (computerScore < 5 && humanScore < 5) {
        playRound(getComputerChoice(),event.target.textContent)
    }
});
scissors.addEventListener("click", event => {
    if (computerScore < 5 && humanScore < 5) {
        playRound(getComputerChoice(),event.target.textContent)
    }
});

reset.addEventListener("click", event => {
    humanScore = 0;
    computerScore = 0;

    humanScoreCounter.textContent = `Your Score: ${humanScore}`;
    computerScoreCounter.textContent = `Computer's Score ${computerScore}`;
    
    playerMoveBox.replaceChildren();
    compMoveBox.replaceChildren();
    results.querySelectorAll("h1").forEach(h1 => h1.remove());
    
})




