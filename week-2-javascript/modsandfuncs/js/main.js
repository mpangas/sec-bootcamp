// Modules
// import playGuitar from "./guitars.js";
// import {shredding as shred, plucking as pluck} from "./guitars.js";
import * as Guitars from "./guitars.js"
import User from "./user.js";
const me = new User("email@email.com", "Dave");
console.log(me);

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

// Higher Order Functions

// Function that does at least one of the following
// - Takes one or more functions as an argument
// - Returns a function as the result

import { posts } from "./posts.js";

posts.forEach(post => {
    console.log(post);
})
console.clear();

const filteredPosts = posts.filter((post) => {
    return post.userId === 5;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
});
console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPosts);