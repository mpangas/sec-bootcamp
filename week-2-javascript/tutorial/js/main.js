// Code Challenge 1

// Return random letter from your name
const myName = "Michael";
const randomIndex = Math.floor(Math.random() * myName.length);
console.log(myName.charAt(randomIndex));

// Ternary Operators

let playerOne = "scissors"
let computer = "rock";
let result =
    playerOne === computer ? "Tie game!"
        : playerOne === "rock" && computer === "paper"
            ? "Computer wins!"
            : playerOne === "paper" && computer === "scissors"
                ? "Computer wins!"
                : playerOne === "scissors" && computer === "rock"
                    ? "Computer wins!"
                    : "playerOne wins!";
console.log(result);


