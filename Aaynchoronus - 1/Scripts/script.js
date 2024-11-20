// Fucntion to generate a random number between 1 & 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Functiom to update the dice displays and handle the logic
function rollAndDetermineWinner() {
    // Roll the dice for each member
    let scoreA = rollDice();
    let scoreB = rollDice();
    let scoreC = rollDice();

    // Display the scores on the dice
    document.getElementById("diceA").textContent = scoreA;
    document.getElementById("diceB").textContent = scoreB;
    document.getElementById("diceC").textContent = scoreC;

    // Reset all the dice colors
    document.getElementById("diceA").classList.remove("green", "yellow", "red", "blue");
    document.getElementById("diceB").classList.remove("green", "yellow", "red", "blue");
    document.getElementById("diceC").classList.remove("green", "yellow", "red", "blue");
    
    //Logic to determine winner, second place and loser
    let winner = "A";
    let second = "B";
    let loser = "C";

    // Determine the maximum, secind and minimum score
    if (scoreB > scoreA && scoreB > scoreC) {
        winner = "B";
        second = scoreA > scoreC ? "A" : "C";
        loser = second === "A" ? "C" : "A";
    } else if (scoreC > scoreA && scoreC > scoreB) {
        winner = "C";
        second = scoreA > scoreB ? "A" : "B";
        loser = second === "A" ? "B" : "A";
    }

    // Handle ties by checking if two or more players have the same score
    if (scoreA === scoreB && scoreB === scoreC) {
        winner = "Tie";
        second = "Tie";
        loser = "Tie";
    } else if (scoreA === scoreB || scoreB === scoreC || scoreA === scoreC) {
        winner = "Tie";
        second = "Tie";
    }

    // Display the Winner
    let winnerDiv = document.getElementById("winner");
    if (winner === "Tie") {
        winnerDiv.textContent = "Winner: It's a tie!";
    } else {
        winnerDiv.textContent = "Winner: Member" + " " + winner;
    } 

// Apply colors based on the results
    if (winner === "A") {
        document.getElementById("diceA").classList.add("green");
    } else if (winner === "B") {
        document.getElementById("diceB").classList.add("green");
    } else if (winner === "C") {
        document.getElementById("diceC").classList.add("green");
    }

    if (second === "A") {
        document.getElementById("diceA").classList.add("yellow");
    } else if (second === "B") {
        document.getElementById("diceB").classList.add("yellow");
    } else if (second === "C") {
        document.getElementById("diceC").classList.add("yellow");
    }

    if (loser === "A") {
        document.getElementById("diceA").classList.add("red");
    } else if (loser === "B") {
        document.getElementById("diceB").classList.add("red");
    } else if (loser === "C") {
        document.getElementById("diceC").classList.add("red");
    }
}

// Attach the function to the button click event
document.getElementById("rollButton").addEventListener("click", rollAndDetermineWinner);
