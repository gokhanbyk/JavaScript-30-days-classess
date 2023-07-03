// Day 09 : Higher Order Function

// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// CALLBACK
// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3)) // 27

// Returning function
//  Higher order functions return function as a value​

/// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10)) // 23


// For instance the forEach method uses call back.

// const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
// console.log(sumArray(numbers)) // 15

/** The above example can be simplified as follows:

const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
*/

// SETTİNG TİME
    // setInterval  /   setTimeout

/*
// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)
*/

function sayHello() {
    console.log('Hello');
}
//setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// Setting a time using a setTimeout

/*
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
*/

function sayWorld() {
    console.log('world')
}
setTimeout(sayWorld, 2000) // it prints world after it waits for 2 seconds


// Functional Programming
    //forEach, map, filter, reduce, find, every, some, and sort.

// forEach : iterate an array elements. use forEach only with ARRAYS. it takes a callback function with elements, index parameter and array itself / index and array optioal
/*
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
// the above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
// the above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
*/
let sum = 0
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(num => console.log(num))
console.log(sum); // 1 2 3 4 5 

numbers.forEach(num => sum += num)
console.log(sum) // 15

const countries1 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries1.forEach((element) => console.log(element.toUpperCase()))


// MAP : Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
/*
const modifiedArray = arr.map(function (element, index, arr) {
    return element
})
*/
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers1 = [1, 2, 3, 4, 5]
const numbersSquare = numbers1.map((num) => num * num)

console.log(numbersSquare) // [1, 4, 9, 16, 25]

const names = ['Gökhan', 'Arda', 'Mehmet', 'Emre']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase) // (4) ['GÖKHAN', 'ARDA', 'MEHMET', 'EMRE']


const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  const countriesToUpperCase = countries2.map((country) => country.toUpperCase())
  console.log(countriesToUpperCase) // ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
  
  /*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */

const countriesFirstThreeLetters = countries2.map((country) => country.toUpperCase().slice(0, 3))
console.log(countriesFirstThreeLetters) //  ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]


// FILTER : filter out items which full fill filtering conditions and return a neew array

//Filter countries containing land
const countriesCointainingLand = countries2.filter((country) => country.includes('land'))
console.log(countriesCointainingLand) // ['Finland', 'Ireland']

const countriesEndsByia = countries2.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia) // ['Albania', 'Bolivia','Ethiopia']

const countriesHaveFiveLetters = countries2.filter((country) => country.length === 5)
console.log(countriesHaveFiveLetters) // ['Japan', 'Kenya']

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty) // [{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]


// REDUCE
//Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error

/*
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)
*/

const sayilar = [1, 2, 3, 4, 5]
const toplam = sayilar.reduce((acc, cur) => acc + cur, 0)
console.log(toplam) // 15 // if we give 1 instead of 0 it returns 16

// EVERY : check if all the elements are similar in one aspect. it returns boolean

const isimler = ['Gökhan', 'Arda', 'Mehmet', 'Emre']
const areAllStr = isimler.every((name) => typeof name === 'string') // are all string?
console.log(areAllStr) // true

const bools = [true, true, true, true]
const areAllTrue = bools.every((bool) => bool === true) // are all true?
console.log(areAllTrue) // true


// FIND : return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age) // 18 / if a give > than : 24 it is because 24 is the first index

// const names will be here
names.push('Asabeneh')
const result = names.find((name) => name.length > 7)
console.log(result) // Asabeneh


// scores array should be here

const score = scores.find((user) => user.score > 80)
console.log(score) // { name: "Asabeneh", score: 95 }


// FINDINDEX: return the position of the first element which satisfies the condition

// names and ages arrays should be here

const result1 = names.findIndex((name) => name.length > 7)
console.log(result1) // 4

const age1 = ages.findIndex((age) => age < 20)
console.log(age1) // 5


// SOME : check if some of the elements are similar in one aspect. it return boolean

//names and bools arrays should be here

const areSomeTrue = bools.some((bool) => bool === true)
console.log(areSomeTrue) // true

const areAllStrInSome = names.some((name) => typeof name === 'number')
console.log(areAllStrInSome) // false


// Sort : The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

// Sorting strng values
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted


// Sorting Numeric Values
const numbersSort = [9.81, 3.14, 100, 37]
// using sort method to sort number items provide a wrong result. see below
console.log(numbersSort.sort()) //[100, 3.14, 37, 9.81]
// to avoid this

numbersSort.sort(function (a, b) {
    return a - b   // this return lowest to highest
})
console.log(numbersSort) // [3.14, 9.81, 37, 100]

numbersSort.sort(function(a, b) {
    return b - a // this return highest to lowest
})
console.log(numbersSort) //[100, 37, 9.81, 3.14]


// SORTING OBJECT ARRAY ********
/*
objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
})
*/
// OR
/*
objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})
*/

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]

users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users)
/*
{name: 'Elias', age: 22}
{name: 'Brook', age: 50}
{name: 'Eyob', age: 100} 
{name: 'Asabeneh', age: 150}
*/
