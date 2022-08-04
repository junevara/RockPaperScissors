function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*(10-1))+1;
    if (randomNumber >= 1 && randomNumber <= 3){
        return "Rock";
    }
    else if (randomNumber >= 4 && randomNumber <= 6){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let computerChoice = getComputerChoice();

console.log(computerChoice);