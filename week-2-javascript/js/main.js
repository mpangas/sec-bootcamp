// Code Challenge 1

// Return random letter from your name
const myName = "Michael"
const randomIndex = Math.floor(Math.random()*myName.length);
console.log(myName.charAt(randomIndex));