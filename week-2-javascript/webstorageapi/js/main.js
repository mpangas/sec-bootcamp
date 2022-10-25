// Web Storage API

// Not part of the DOM - refers to the Windows API
// Available to JS via the global variable: window

const myObject = {
    name: "Mike",
    logName: function() {
        console.log(this.name);
    }
}

const myArray = ['eat', 'sleep', 'code'];

// localStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
//localStorage.removeItem("myLocalStore")
//localStorage.clear();
const storeLength = localStorage.length;
const key = localStorage.key(1);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(storeLength);