// DATA TYPES

// Numbers
/*
Integers: Integer (negative,zero and positive) numbers Example: ... -3, -2,-1, 0, 1, 2, 3...
Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...
*/

// Strings
/*
'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'
*/

// Booleans
/*
true // if the light is on, the value is true
false // if the light is off, the value is false
*/

// Undefined
/*
let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
*/

// Null
/*
let emptyValue = null
*/

// Checking Data Types
/*
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
*/

//JavaScript Valid Variables
/*
firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
*/

// Invalid Variables
/*
  first-name
  1_num
  num_#_1
*/

// Declared Variables
// Declaring different variables of different data types
let firstName = 'Gökhan' // first name of a person
let lastName = 'Bıyıkoğlu' // last name of a person
let country = 'Turkey' // country
let city = 'Izmır' // capital city
let age = 21 // age in years
let isMarried = false

// console.log(firstName, lastName, country, city, age, isMarried)

// Declaring variables with number values
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
// console.log(gravity, boilingPoint, PI)

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Gökhan', job = 'student', live = 'Turkey'
// console.log(name, job, live)