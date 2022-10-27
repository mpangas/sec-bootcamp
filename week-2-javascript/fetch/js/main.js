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
            // console.log(user);
        })
    });

// Async / Await

// Workflow function

const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    //console.log(data);
}

getAllUserEmails();

// 2nd parameter of Fetch is an object

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}

getDadJoke();

// Posting data

const jokeObject = {
    id: "123456",
    joke: "Hello lol."
}

const postData = async => (jokeObject) => {
    const response = fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = response.json();
    console.log(jsonJokeData);
}