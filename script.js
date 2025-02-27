function getComputerChoice () {

    let pick = Math.floor (Math.random() * 3);

        if (pick === 0) {
            computerChoice = "rock";
        } 
        
        else if (pick === 1) {
            computerChoice = "paper";
        }
        
        else {
            computerChoice = "scissors";
        }
    
    return computerChoice;

}

//console.log(getComputerChoice())

//let humanChoice = prompt("Let's play! Type rock, paper or scissors");

function getHumanChoice () {
let humanChoice = prompt("Let's play! Type rock, paper or scissors");
humanChoice = humanChoice.toLowerCase();
if  (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
}
else {
    return alert("Unfortunately this game isn't that smart. You can only chose rock paper or scissors. Try again...");
}

}

//console.log(getHumanChoice());

let humanScore = 0; 
let computerScore = 0;

function playRound (human, computer) {

if (human === "rock" && computer === "scissors") {
    return alert("The computer chose scissors, you win!");
}


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

