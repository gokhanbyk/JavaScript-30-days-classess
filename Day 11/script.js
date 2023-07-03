// DAY 11   


// Destructing Arrays
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) // 1 2 3

const names = ['Gökhan', 'Arda', 'Mehmet', 'Emre']
let [firstName, secondName, thirdName, fourthhName] = names

console.log(firstName, secondName, thirdName, fourthhName) // Gökhan Arda Mehmet Emre

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp) // 2.72 3.14 9.81 37 100


const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack

console.log(frontEnd) //  ["HTML", "CSS", "JS", "React"]
console.log(backEnd) // ["Node", "Express", "MongoDB"]

// to skip the value use ,
const numeros = [1, 2 ,3]
let [numeroOne, , numoreThree] = numeros

console.log(numeroOne, numoreThree) //  1 3

const isimler = ['Gökhan', 'Arda', 'Mehmet', 'Emre']
let [, secondPerson, , fourthPerson] = isimler

console.log(secondPerson, fourthPerson) // Arda Emre

const namesOne = [undefined, 'Arda', 'Gökhan']
let [
  ilkName = 'Emre',
  ikinciName,
  ucuncuName,
  dorduncuName = 'Mehmet'
] = namesOne

console.log(ilkName, ikinciName, ucuncuName, dorduncuName) // Emre Arda Gökhan Mehmet

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]

// Destructuring during iteration

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
  ['Turkey', 'Ankara']
]

for (const [country, city] of countries) {
  console.log(country, city)
} // Finland Helsinki Sweden Stockholm Norway Oslo Turkey Ankara


const fullStack2 = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of fullStack2) {
  console.log(first, second, third)
}
// HTML CSS JS / Node Express MongoDB

// Destructuring Object

const rectangleEx = {
  width: 20,
  height: 10,
  area: 200
}
let {width, height, area, perimeter} = rectangleEx

console.log(width, height, area, perimeter) // 20 10 200 undefined

// Renaming during structuring

const rectangleEx2 = {
  width: 20,
  height: 10,
  area: 200
}

let {width: w, height: h, area: a, perimeter: p} = rectangleEx2

console.log(w, h, a ,p) // 20 10 200 undefined

// for undefined 

const rectangleUndef = {
  width1: 20,
  height1: 10,
  area1: 200
}
let {width1, height1, area1, perimeter1 = 60} = rectangleUndef

console.log(width1, height1, area1, perimeter1) // 20 10 200 60
// modify the object: width to 30 and perimeter to 80

const rectangleModified = {
  modifiedWidth: 30,
  modifiedHeight: 10,
  modifiedArea: 200,
  modifiedPerimeter: 80
}

let {modifiedWidth, modifiedHeight, modifiedArea, modifiedPerimeter = 60} = rectangleModified

console.log(modifiedWidth, modifiedHeight, modifiedArea, modifiedPerimeter) // 30 10 200 80

// Object parameter without destructurin

const rect = {
  width: 20,
  height: 10
}

const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60

// Another Example

const person = {
  firstName: 'Gökhan',
  lastName: 'Biyikoglu',
  age: 21,
  country: 'Turkey',
  job: 'Student',
  skills: [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Python',
    'Java'
  ],
  languages: ['Turkish', 'English', 'German']
}

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country} I am ${obj.age} old. I am a ${obj.job}. I am learning ${formattedSkills} and ${skills[skills.length - 1]}, I speak ${formattedLanguages}, and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person)) 
// Gökhan Biyikoglu lives in Turkey I am 21 old. I am a Student. I am learning HTML, CSS, JS, React, Python and Java, I speak Turkish, English, and a little bit of German.

// Object parameter with destructuring

const calculatePerimeter2 = ({width, height}) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter2(rect)) // 60

const getPersonInfo2 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. I am ${age} years old. I am an ${job}. I learn ${formattedSkills} and ${
    skills[skills.length - 1]
  }. I speak ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))
// Gökhan Biyikoglu lives in Turkey I am 21 old. I am a Student. I am learning HTML, CSS, JS, React, Python and Java, I speak Turkish, English, and a little bit of German.

// Destructuring object during iteration

const toDoList = [
  {
    task: 'Prepare JS Test',
    time: '3/7/2020 1:21',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '3/7/2023 3:20',
    completed: false
  },
  {
    task: 'Assess Test Result',
    time: '3/7/2023 7:00',
    completed: false
  }
]

for(const {task, time, completed} of toDoList) {
  console.log(task, time, completed)
}
// Prepare JS Test 3/7/2020 1:21 true
// Give JS Test 3/7/2023 3:20 false
// Assess Test Result 3/7/2023 7:00 false

// Spread or Rest Operator
// Spread operator to get the rest of array elements

/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]
*/

const countries2 = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries2
// we skip Belgium with ,

console.log(gem) // Germany
console.log(fra) // France
console.log(nordicCountries) // (5) ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

// Spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens,...odds]

console.log(evenNumbers) // [0, 2, 4, 6, 8, 10]
console.log(oddNumbers) // [1, 3, 5, 7, 9]
console.log(wholeNumbers) // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]


const frontEndSpread = ['HTML', 'CSS', 'JS', 'React']
const backEndSpread = ['Node', 'Express', 'MongoDB']
const fullStackSpread = [...frontEndSpread, ...backEndSpread]

console.log(fullStackSpread) // ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

// Spread operator to copy object
const user = {
  name:'Gökhan',
  title: 'Programmer',
  country: 'Turkey',
  city: 'Izmir'
}

const copiedUser = {...user}
console.log(copiedUser) // {name: 'Gökhan', title: 'Programmer', country: 'Turkey', city: 'Izmir'}

const modifiedCopiedUser = {...user, title: 'Student'}
console.log(modifiedCopiedUser) // {name: 'Gökhan', title: 'Student', country: 'Turkey', city: 'Izmir'}


// Spread operator with arrow function

const sumAllNums1 = (...args) => {
  console.log(args)
}

sumAllNums1(1, 2, 3, 4 ,5) // [1, 2, 3, 4, 5]

const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args) {
    sum += num
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5)) // 15