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
    let arr = [];
    arr[1] = computerChoice;
    arr[2] = playerChoice;
    if (computerChoice === playerChoice){
        arr[0]='draw';
        
    }
    else if (computerChoice === "rock" && playerChoice === "scissors"){
        arr[0]='lose';
    }
    else if (computerChoice === "paper" && playerChoice === "rock"){
        arr[0]='lose';
    }
    else if (computerChoice === "scissors" && playerChoice === "paper"){
        arr[0]='lose';
    }
    
    
    else { 
        arr[0]='win';
    }
    //console.log(arr);
    return arr;

}

let outcome = [];
let score = [0, 0, 0];


const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    button.classList.add('clickAnimation');
    outcome = playRound(getComputerChoice(), button.getAttribute('id'));
    
    
    printPara();
    
    
    if (outcome[0] === 'win'){
        score[0]++;
    }
    else if (outcome[0] === 'lose'){
        score[1]++;
    }
    else if (outcome[0] === 'draw'){
        score[2]++;
    
    }

    const scoreDisplay = document.querySelector('.scoreDisplay');
    scoreDisplay.textContent = `${score[0]} win(s), ${score[1]} loss(es), ${score[2]} draw(s)`

    const para2 = document.querySelector('.finalWinner');
    if(score[0] === 5 || score[1] === 5){
        
        
        if (score[0] === 5){
            para2.textContent = 'You are the final winner';
        }
        else if (score[1] === 5){
            para2.textContent = 'The computer is the final winner';
        }
        
       

        score = [0, 0, 0];



    }

    if((score[0] === 1 && score[1] === 0 && score[2] === 0)||(score[0] === 0 && score[1] === 1 && score[2] === 0)||(score[0] === 0 && score[1] === 0 && score[2] === 1)){
        para2.textContent='';
    }




    
}));

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clickAnimation');
}

buttons.forEach((button) => button.addEventListener('transitionend', removeTransition));


function printPara(){
    const para = document.querySelector('.result');

    if (outcome[0] === 'lose'){
        para.textContent = `You ${outcome[0]}, your ${outcome[2]} is beaten by computers ${outcome[1]}!`;
    }
    else if (outcome[0] === 'win'){
        para.textContent = `You ${outcome[0]}, your ${outcome[2]} beats computers ${outcome[1]}!`;
    }
    else {
        para.textContent = `You draw!`;
    }
}