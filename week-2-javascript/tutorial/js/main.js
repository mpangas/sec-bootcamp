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

// Functions

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("september"));

// Objects

const myObj = { name: "Dave" };
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afernoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
}
console.log(anotherObj.action());

for(let thing in anotherObj) {
    console.log(anotherObj[thing]);
}

// Classes
class Pizza {
    crust = "original";
    #sauce = "traditional"; // real private field
    constructor(pizzaType) {
        this.type = pizzaType;
        this.size = "medium";
        this._crust = "original"; // underscore makes "private"
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust ${this.type} pizza.`)
    }
}

// class SpecialtyPizza extends Pizza {
//     constructor(pizzaType) {
//         super(pizzaType);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
//     }
// }

// Factory Function
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size}, ${crust} crust pizza.`)
    }
}

const myPizza = pizzaFactory("large");
myPizza.bake();

// JSON: JavaScript Object Notation
const obj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function() {
        console.log("Hello!");
    }
}

const sendJSON = JSON.stringify(obj);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);