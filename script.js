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

console.log(getComputerChoice())

let humanChoice = prompt("Rock, Paper or Scissors?");

function getHumanChoice () {
humanChoice = humanChoice.toLowerCase();
if  (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
}
else {
    return "invalid human input";
}

}

console.log(getHumanChoice());

