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


function getUserChoice() {

const playerChoice = prompt("Chose either Rock, Paper or Scissors!", "Rock");
const playerChoiceLowerCase= playerChoice.toLowerCase();
return playerChoiceLowerCase;
}

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
    else if(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        return "Error! Type in a valid choice!"
    }
    
    else { return `You win! ${playerChoice} beats ${computerChoice}!`;
    }
}

function game() {
    let win = 0;
    let lose = 0;
    let draw = 0;
    for (i = 0; i < 5; i++){
        
        const computerChoice = getComputerChoice();
        const playerChoice = getUserChoice();
        const outcome = playRound(computerChoice, playerChoice);
        if (outcome.slice(0, 9) === "You lose!"){
            lose++;
        }
        else if (outcome.slice(0, 8) === "You win!"){
            win++;
        }
        else if (outcome === "draw") {
            draw++;
        }
        else if (outcome.slice(0, 6) === "Error!"){
            i--;
        }
        
        console.log(outcome);
    }
    console.log("wins:" + win + ", losses: " + lose );
    if (win < lose) {
        console.log("The final winner is the Computer.");
    }
    else if (win > lose) {
        console.log("The final winner is you.")
    }
    else {
        console.log("You drew.");
    }
}

game();