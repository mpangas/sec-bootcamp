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

// Loops

let name = "Dave";
let counter = 0;
let myLetter;
while(counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if(counter === 1) {
        counter += 2;
        continue;
    }
    if(myLetter === "v") break;
    counter++;
}
console.log(counter);