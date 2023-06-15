// Primitive Data Types
/*
Numbers - Integers, floats
Strings - Any data under single quote, double quote or backtick quote
Booleans - true or false value
Null - empty value or no value
Undefined - a declared variable without a value
Symbol - A unique value that can be generated by Symbol constructor
    Example:
        let word = 'JavaScript'
        let numOne = 3
        let numTwo = 3

        console.log(numOne == numTwo)      // true

        let js = 'JavaScript'
        let py = 'Python'

        console.log(js == py)             //false

        let lightOn = true
        let lightOff = false

        console.log(lightOn == lightOff) // false
*/

// Non-Primitive Data Types
// Objects and Arrays
/* Examples
       let nums = [1, 2, 3]
        nums[0] = 10

        console.log(nums)  // [10, 2, 3] 

        let nums = [1, 2, 3]
        let numbers = [1, 2, 3]

        console.log(nums == numbers)  // false

        let userOne = {
        name:'Gökhan',
        role:'learning',
        country:'Turkey'
        }

        let userTwo = {
        name:'Gökhan',
        role:'learning',
        country:'Turkey'
        }

        console.log(userOne == userTwo) // false

        let nums = [1, 2, 3]
        let numbers = nums

        console.log(nums == numbers)  // true

        let userOne = {
        name:'Gökhan',
        role:'learning',
        country:'Turkey'
        }

        let userTwo = userOne

        console.log(userOne == userTwo)  // true
*/


// Declaring Number Data Types
let age = 35
const gravity = 9.81 // we use const for non-changing valuse, gravitational constant in m/s2
let mass = 72   // mass in Kilogram
const PI = 3.14     // PI a geometrical constant

// More ex
const boilingPoint = 100 // temperature in oC, boiligng point of water which is a constant
const bodyTemp = 37 //oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

// Math Object

let newPI = Math.PI

console.log(newPI)     //3.141592653589793

// Rounding to the closest number
// if above .5 up if less .5 down rounding

console.log(Math.round(newPI))  // 3 to round values to the nearest number

console.log(Math.round(9.82))   // 10

console.log(Math.floor(newPI))     // 3 rounding down

console.log(Math.ceil(newPI))     // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10))  // -5, returns the minumum value

console.log(Math.max(-5, 3, 20, 4, 5, 10))  // 20, returns the maximum value

const randNum = Math.random()   // creates random number between 0 to 0.999999
console.log(randNum)

const num = Math.floor(Math.random() * 11)  // creates random number between 0 and 10
console.log(num)

// Absolute value
console.log(Math.abs(-10))  // 10

// Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       //  1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)         // 2.718   Math.E represents the base of the natural logarithm, known as the Euler's constant.

// Logarithm
// Returns the natural logartihm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
console.log(Math.sin(0))
console.log(Math.sin(60))

console.log(Math.cos(0))
console.log(Math.cos(60))


// RANDOM NUMBER GENERATOR
let randomNum = Math.random() // generates 0 to 0.99.....

let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)   // between 0 and 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)  // betwenn 0 and 10


// STRINGS

let space = ' '  // an empty space string
let firstName = 'Gökhan' 
let lastName = 'Biyikoğlu'
let country = 'Turkey'
let city = 'izmir'
let language = 'JavaScript'
let job = 'Student'
let quote = "The saying, 'Seeing is Believing' is not correct in 2020"
let quotWithBackTick = `The saying, 'Seeing is Believing' is not correct in 2020`

// String Concatenation
let fullName = firstName + space + lastName // concatenation, merging two string together
// console.log(fullName)
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
console.log(personInfoOne)

// Long Literal Strings
const paragraph = "My name is Gökhan Biyikoglu. I live in Turkey, izmir.\
I am a student and I love learning. I learn HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, web development. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// Escape Sequences in Strings
/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// Template Literals (Template Strings)

//Syntax
// `String literal text`
// `String literal text ${expression}`

// Example 1
console.log(`The sum of 2 and 3 is 5`)      // statically writing the data
let a = 2 
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)     // injecting the data dynamically

// Example 2
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}, I learn ${language}`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`)

// String Methods
let js = 'JavaScript'
console.log(js.length)
console.log(firstName.length)

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)    // J

let secondLetter = string[1]
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])  // t
// ************************************

console.log(string.toUpperCase())   //JAVASCRIPT
console.log(firstName.toUpperCase())    //GÖKHAN
console.log(country.toUpperCase())  //TURKEY
// ************************************

console.log(string.toLowerCase())   //javascript
console.log(firstName.toLowerCase())    //gökhan
console.log(country.toLowerCase())  //turkey
// ************************************

console.log(string.substr(4, 6))    //Script
console.log(country.substr(3, 4))   //key
// ************************************

console.log(string.substring(0, 4)) // Java
console.log(string.substring(4, 10)) // Script
console.log(string.substring(4)) // Script

console.log(country.substring(0, 3)) // Tur 
console.log(country.substring(3, 7))  // Key
console.log(country.substring(3))   // Key
// ************************************

string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))      // Split to an array at space -> (4) ["30", "Days", "Of", "JavaScript"]

console.log(firstName.split())      // change to an array -> ['Gökhan']
console.log(firstName.split(''))    // Split to an array at each letter -> (6) ['G', 'ö', 'k', 'h', 'a', 'n']

let countries = 'Finland, Sweden, Norway, Denmark, And Iceland'

console.log(countries.split(',')); //// split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
// ************************************

string = '  30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

firstName = '   Gökhan  '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
// ************************************

string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

console.log(country.includes('tur'))     // false
console.log(country.includes('Tur'))     // true
console.log(country.includes('key'))    // true
console.log(country.includes('Key'))    // false
// ************************************

// string.replace( oldsubstring, newsubstring)

console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

console.log(country.replace('Turkey', 'Turkish'))   // Turkish
// ************************************

console.log(string.charAt(0))   // 3

lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
// ************************************

//string.charCodeAt(index)

console.log(string.charCodeAt(3))       // D ASCII number is 68
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116
// ************************************
// string.indexOf(substring)

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
// ************************************
//syntax
// string.lastIndexOf(substring)

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.indexOf('love'))       // 2
console.log(string.lastIndexOf('you'))        // 63
console.log(string.indexOf('you'))        // 22
console.log(string.lastIndexOf('JavaScript')) // 38
// ************************************
// string.concat(substring, substring, substring)

string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

country = 'Tur'
console.log(country.concat("Key")) // Turkey
// ************************************
//syntax
// string.startsWith(substring)

string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   //true
console.log(string.startsWith('love'))  //false
console.log(string.startsWith('world')) //false

console.log(country.startsWith('Tur'))  //true
console.log(country.startsWith('tur'))  //false
console.log(country.startsWith('key'))  //false
// ************************************
//string.endsWith(substring)

string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

country = 'Turkey'

console.log(country.endsWith('key'))         // true
console.log(country.endsWith('tur'))          // false
console.log(country.endsWith('Tur'))          //  false
// ************************************
// string.search(substring)

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
// ************************************

string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
// syntax
// string.match(substring)
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))   // ['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]

let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
// ************************************
// string.repeat(n)
string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
// ************************************

firstName = 'Gökhan'      // string
lastName = 'Bıyıkoğlu'        // string
country = 'Turkey'         // string
city = 'izmir'           // string
age = 21                   // number, it is not my real age, do not worry about it
job                         // undefined, because a value was not assigned

console.log(typeof 'Gökhan')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// CHANGING DATA TYPE CASTING
        //String to int
        // parseInt(), Number(), Plus sign(+)
    let num1 = '10'
    let numInt = parseInt(num1)
    console.log(numInt) // 10

    numInt = Number(num1)
    console.log(numInt) // 10

    numInt = +num1
    console.log(numInt) // 10

        //String to Float
        // parseFloat(), Number(), Plus sign(+)
    let num2 = '9.81'
    let numFloat = parseFloat(num2)
    console.log(numFloat) // 9.81

    numFloat = Number(num)
    console.log(numFloat) // 9.81

    numFloat = +num
    console.log(numFloat) // 9.81

        //Float to Int
        //parseInt()
    num1 = 9.81
    numInt = parseInt(num1)
        
    console.log(numInt) // 9
    