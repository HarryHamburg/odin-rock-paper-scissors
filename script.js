function getComputerChoice () {

    let pick = Math.floor (Math.random() * 3);

        if (pick === 0) {
            computerChoice = "Rock";
        } 
        
        else if (pick === 1) {
            computerChoice = "Paper";
        }
        
        else {
            computerChoice = "Scissors";
        }
    
    return computerChoice;

}

console.log(getComputerChoice())