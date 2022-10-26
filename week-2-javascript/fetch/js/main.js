// Fetch API

// Callbacks

// function firstFunction(parameters, callback) {
//     // do stuff
//     callback();
// }

// AKA "callback hell"
// firstFunction(para, function() {
//     secondFunction(para, function() {
//         thirdFunction(para, function() {
//             // like this
//         }
//     }
// })

// Promises
// 3 states: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! Resolved the promise!");
//     } else {
//         reject("No! Rejected the promise.");
//     }
// });
// console.log(myPromise);

// myPromise.then(value => {
//     return value+1;
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.error(err);
// })

// const myNextPromise = new Promise((resolve,reject) => {
//     setTimeout(function() {
//         resolve("myNextPromise resolved!");
//     }, 3000);
// })

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
// });

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user);
        })
    });

// Async / Await

const myUsers = {
    userList: []
}

async function myCoolFunction() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

myCoolFunction();

const anotherFunc = async() => {
    const data = await myCoolFunction();
    console.log(data);
}