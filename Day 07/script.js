// Functions

/*
A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function

*/

// Function Declaration

//declaring a function without a parameter
function functionName() {
    //code goes here
}
functionName() // calling function by its name and with parentheses

// Function without a parameter and return

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq);
}

square() // 4

// function without parameter
function addTwoNumber() {
    let numOne = 20
    let numTwo = 20
    let sum = numOne + numTwo
    return sum
}

console.log(addTwoNumber());
// addTwoNumber() // a function has to be called by its name to be executed

function printFullName() {
    let firstName = 'Gökhan'
    let lastName = 'Biyikoglu'
    let space = ' '
    let fullName = firstName + space + lastName

    return fullName
}

console.log(printFullName());
// printFullName() // calling a function

// Function with a Parameter

// funtion with one parameter
function functionName(parm1) {
    // codes go here
}
// functionName(parm1) // during calling or invoking one argument needed

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10));  // should be called with ıne argument

function square(number) {
    return number * number
}
console.log(square(10)); // 100

// Function with two parameters

function functionName(parm1, parm2) {
    //code goes here
}
// functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter does not take input

function sumTwoNumber(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
    // console.log(sum);
}
console.log(sumTwoNumber(10, 10)) // 20

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Gökhan', 'Bıyıkoğlu')); // Gökhan Bıyıkoğlu

// Function with many parameters
function functionName(parm1, parm2, parm3,) {
    // code goes here
}
//functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

const numbers = [1, 2, 3, 4, 5]
// calling function
console.log(sumArrayValues(numbers)) // 15

const areasOfCircle = (radius) => {
    let area = Math.PI * radius * radius
    return area
}
console.log(areaOfCircle(10));

// Funciton with unlimited number of parameters
// unlimited number of parameters in regular function

//access the arguments object

function sumAllNum() {
    console.log(arguments);
}

sumAllNum(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]


function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Unlimited number of parameters in arrow function

const sumAllNums1 = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
}

sumAllNums1(1, 2, 3, 4) // (4) [1, 2, 3, 4]

// function declaration

const sumAllNum1 = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumAllNum1(1, 2, 3, 4)) // 10
console.log(sumAllNum1(10, 20, 13, 40, 10))  // 93
console.log(sumAllNum1(15, 20, 30, 25, 10, 33, 40))  // 173,

// Anonymous Function

const anonymousFun = function () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}
console.log(anonymousFun)
/**ƒ () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
} */


// Expression Function
const square1 = function (n) {
    return n * n
}
console.log(square1(2)) // 4

// Self Invoking Functions

/*
(function(n) {
    console.log(n * n);
}) (2) // 4, but instead of just printing if we want to retun and store the data, we do as shown below
*/

let sqauredNum = (function (n) {
    return n * n
})(10)
console.log(sqauredNum)

// Arrow Function

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square3(n) {
    return n * n
}

console.log(square3(2)) // 4

const square2 = n => {
    return n * n
}

console.log(square2(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square4 = n => n * n  // -> 4


const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const printFullNam = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printFullNam('Gökhan', 'Bıyıkoğlu'))


//  Function with default parameters
/*
    // syntax
    // Declaring a function
    function functionName(param = value) {
        //codes
    }
  
        // Calling function
        functionName()
        functionName(arg)
*/

// example

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 days of javascript`
    return message
}

console.log(greetings()) // Peter, welcome to 30 days of javascript
console.log(greetings('Gökhan')) // Gökhan, welcome to 30 days of javascript


function generateFullName(firstName = 'Gökhan', lastName = 'Bıyıkoğlu') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName()) // Gökhan Bıyıkoğlu
console.log(generateFullName('David', 'Smith')) //  David Smith

function calculateAge(birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
}
console.log('Age: ', calculateAge(1819)) // Age: 204

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changedd to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

// arrow functon style
/*
    // syntax
    // Declaring a function
    const functionName = (param = value) => {
    //codes
    }

    // Calling function
    functionName()
    functionName(arg)
*/

// example

const greetings1 = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
}

console.log(greetings1()) // Peter, welcome to 30 days of javascript
console.log(greetings1('Gökhan')) // Gökhan, welcome to 30 days of javascript

const generateFullName1 = (firstName = 'Gökhan', lastName = 'Bıyıkoğlu') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullName1()) // Gökhan Bıyıkoğlu
console.log(generateFullName1('David', 'Smith')) // David Smith


const calculateAge1 = (birthYear, currentYear = 2023) => currentYear - birthYear
console.log('Age: ', calculateAge1(1819)) // Age: 204

const weightOfObject1 = (mass, gravity = 9.81) => mass * gravity + ' N'

console.log('Weight of an object in Newton: ', weightOfObject1(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject1(100, 1.62)) // gravity at surface of Moon