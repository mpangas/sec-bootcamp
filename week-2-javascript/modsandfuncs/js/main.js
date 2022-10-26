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