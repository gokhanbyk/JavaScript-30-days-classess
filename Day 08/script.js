// SCOPE

// variables scope can be : Global or Local

//anything declared without let and const is scoped at global level

// scope.js
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is global scope variable and found in the window object

//window global object
function letsLearnScopeX() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
// console.log(a, b) // accessible

//Global object

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
    }
    console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible


// LOCAL SCOPE
//A variable declared as local can be accessed only in certain block code. Block Scope and Function Scope

//scope.js
let c = 'JavaScript' // is a global scope it will be found anywhere in this file
let d = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScopeL() {
    console.log(c, d) // JavaScript 10, accessible
    let value = false
    // block scope
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value) // Python 20 30 true
    }
    // we can not access c because c's scope is only the if block
    console.log(c, d, value) // JavaScript 10 true
}
letsLearnScopeL()
console.log(c, d) // JavaScript 10, accessible

/**
//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3
 
*/

//scope.js
function letsLearnScopeZ() {
    const gravity = 9.81
    console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
    const gravity = 9.81
    console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined


// OBJECT

// an empty object
const personX = {}

// creating an objecting with values
const rectangele = {
    length: 20,
    width: 20
}
console.log(rectangele) //{length: 20, width: 20}

/*
const person = {
    firstName: 'Gökhan',
    lastName: 'Biyikoglu',
    age: 21,
    country: 'Turkey',
    city: 'izmir',
    skills: [
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'MondoDB',
        'Python',
        'D3.js'
    ],
    isMarried: false
}
console.log(person);
*/
// Getting values from an object
// we can access values of object using two methods: 
// using . followed by key name if the key-name is a one word
// using square bracket and a quote

const person = {
    firstName: 'Gökhan',
    lastName: 'Biyikoglu',
    age: 21,
    country: 'Turkey',
    city: 'izmir',
    skills: [
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'MondoDB',
        'Python',
        'D3.js'
    ],
    isMarried: false,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+90530142952'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

// creating object methods

console.log(person.getFullName()) // Gökhan Biyikoglu


// setting new koey for an object

// An object is a mutable data structure and we can modify the content of an object after it gets created. Setting a new keys in an object

person.nationality = 'Turkish'
person.country = 'Turkey'
person.title = 'Student'
person.skills.push('Meteor')
person.skills.push('Sass')


person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe learns ${skills}`
    return statement
}
console.log(person)
console.log(person.getPersonInfo()) //Gökhan Biyikoglu is a Student. He lives in Turkey.He learns HTML, CSS, JS, React, Node, MondoDB, Python, D3.js, Meteor, and Sass

// OBJECT METHODS

//Object.assign: To copy an object without modifying the original object

const person1 = {
    firstName: 'Gökhan',
    age: 21,
    country: 'Turkey',
    city: 'Izmır',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'student',
    address: {
        street: 'Doğuş',
        pobox: 182,
        city: 'Izmır'
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person1)
console.log(copyPerson)


// Getting object keys using Object.key()
//Object.key: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys) // ['firstName', 'age', 'country', 'city', 'skills', 'title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']


// getting object values usingg object.values()
// object.values: to get values of an object as ana array
const values = Object.values(copyPerson)
console.log(values) // ['Gökhan', 21, 'Turkey', 'Izmır', Array(3), 'student', {…}, ƒ]

// getting object keys and values using Object.entries()
// Object.entries: TO get the keys and values in array
const entries = Object.entries(copyPerson)
console.log(entries) 


// Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('name')) // fales
console.log(copyPerson.hasOwnProperty('score')) // false
