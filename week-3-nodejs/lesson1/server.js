// NodeJS vs Vanilla JS
// 1) Node runs on server - not in browser (backend)
// 2) The console is the terminal window
//console.log("Hello");
// 3) Global object instead of window object
//console.log(global);
// 4) Has common core modules we can explore
// 5) CommonJS modules instead of ES6 modules
const os = require('os');
const path = require('path');
const {add, subtract, multiply, divide} = require('./math');

console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// 6) Missing some JS APIs like fetch