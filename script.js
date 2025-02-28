function getComputerChoice () {

    let pick = Math.floor (Math.random() * 3);
let computerChoice;
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


function getHumanChoice () {
let humanChoice = prompt("Let's play! Type rock, paper or scissors");
humanChoice = humanChoice.toLowerCase();
if  (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
}
else {
    alert("Unfortunately this game isn't that smart. You can only chose rock paper or scissors. Try again...");
    return getHumanChoice();
}

}

//console.log(getHumanChoice());

let humanScore = 0; 
let computerScore = 0;

function playRound (human, computer) {

if (human === "rock" && computer === "scissors") {
    humanScore++;
    return alert("The old decrepit computer chose scissors, you win!");
}
else if (human === "rock" && computer === "paper") {
    computerScore++;
    return alert("The old decrepit computer chose paper, you lose!");
}
else if (human === "rock" && computer === "rock") {
    alert("You both chose rock! It's a draw.");
}

else if (human === "paper" && computer === "rock") {
    humanScore++;
    return alert("The old decrepit computer chose rock, you win!");
}
else if (human === "paper" && computer === "scissors") {
    computerScore++;
    return alert("The old decrepit computer chose scissors, you lose!");
}
else if (human === "paper" && computer === "paper") {
    alert("You both chose paper! It's a draw.");
}

else if (human === "scissors" && computer === "paper") {
    humanScore++;
    return alert("The old decrepit computer chose paper, you win!");
}
else if (human === "scissors" && computer === "rock") {
    computerScore++;
    return alert("The old decrepit computer chose rock, you lose!");
}
else if (human === "scissors" && computer === "scissors") {
    alert("You both chose scissors! It's a draw.");
}

}

function playGame () {
alert ("Welcome to rock, paper, scissors. We're going to play 5 rounds. It's you vs the old decrepit computer. Let's go!")
playRound(getHumanChoice(), getComputerChoice());
alert (`after round 1/5, the score is, you: ${humanScore}, the old decrepit computer: ${computerScore}. Time for round 2.`)
playRound(getHumanChoice(), getComputerChoice());
alert (`after round 2/5, the score is, you: ${humanScore}, the old decrepit computer: ${computerScore}. Time for round 3.`)
playRound(getHumanChoice(), getComputerChoice());
alert (`after round 3/5, the score is, you: ${humanScore}, the old decrepit computer: ${computerScore}. Time for round 4.`)
playRound(getHumanChoice(), getComputerChoice());
alert (`after round 4/5, the score is, you: ${humanScore}, the old decrepit computer: ${computerScore}. Time for the final round.`)
playRound(getHumanChoice(), getComputerChoice());
if (humanScore > computerScore) {
    alert (`Congratulations, you won the game! You beat the old decrepit computer with a final score of, you: ${humanScore}, the old decrepit computer: ${computerScore}.`)
}
else if (humanScore < computerScore) {
    alert (`Oh no!, you lost the game! The old decrepit computer beat you with a final score of, you: ${humanScore}, the old decrepit computer: ${computerScore}.`)
}
else if (humanScore === computerScore) {
    alert (`The final score is a draw! You won ${humanScore} rounds, and the old decrepit computer also won ${computerScore} rounds.`)
}
humanScore = 0;
computerScore = 0;
alert ("Thank you for playing. You can use the Play the game button if you want to play again.")
}

