// DAY 18 Promises

// promise: A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A promise is in one of these states: 
/*
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
*/
// as the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained


// Callbacks
const test = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('it did not go well', skills)
    }, 2000)
}

const callback = (err, result) => {
    if(err) {
        return console.log(err)
    } else {
        return console.log(result)
    }
}
test(callback) // it did not go well

const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000)
}
doSomething(callback) // (3) ['HTML', 'CSS', 'JS']

// Promise constructor
// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.length > 0) {
            resolve(skills)
        } else {
            reject('Someting wrong has happaned')
        }
    }, 2000)
})

doPromise.then(result => {
    console.log(result) // (3) ['HTML', 'CSS', 'JS']
}).catch(error => console.log(error))

const didPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.includes('Node')) {
            resolve('fullstack developer')
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

didPromise.then(result => {
    console.log(result)
}).catch(err => {
    console.log(err) // Something wrong has happened
})

// Fetch API
// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => console.log(data))
    .catch(error => console.log(error)) // handling error if something wrong happens


// Asyncs and Await
// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

const square = async function(n) {
    return n * n
}
square(2) // Promise {<resolved>: 4}
// The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.

// to access the value from the promise
const squareX = async function(n) {
    return n * n
}
// const value = await square(2)
// console.log(value) // 4

// fetch api using async and await

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData()

// another example
async function getCountries() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
getCountries()