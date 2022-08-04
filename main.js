function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*(10-1))+1;
    if (randomNumber >= 1 && randomNumber <= 3){
        return "rock";
    }
    else if (randomNumber >= 4 && randomNumber <= 6){
        return "paper";
    }
    else {
        return "scissors";
    }
}

const computerChoice = getComputerChoice();

console.log(computerChoice);

const playerChoice = prompt("Chose either Rock, Paper or Scissors!", "Rock");
const playerChoiceLowerCase= playerChoice.toLowerCase();

function playRound(computerChoice, playerChoice){
    if (computerChoice === playerChoice){
        return "draw";
    }
    else if (computerChoice === "rock" && playerChoice === "scissors"){
        return "You lose! Rock beats Scissors!";
    }
    else if (computerChoice === "paper" && playerChoice === "rock"){
        return "You lose! Paper beats Rock!";
    }
    else if (computerChoice === "scissors" && playerChoice === "paper"){
        return "You lose! Scissors beats Paper!"
    }
    else { return `You win! ${playerChoice} beats ${computerChoice}!`;
    }
}

console.log(playRound(computerChoice, playerChoiceLowerCase));