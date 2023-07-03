// Create an empty array
let arr = []
console.log(arr);

// array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// have dşfferebt data types
arr = [
    'GÖkhan',
    21,
    true,
    {country: 'Turkey', city: 'izmir'},
    {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
]
console.log(arr);

// Creating an array using SPLİT

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies); //["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt =
    'I love learning and being more great. I learn HTML, CSS, JS, React, Python'
const words = txt.split(' ')

console.log(words); // // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


// Accessing array items using index
//  const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
let firstFruit = fruits[0]

console.log(firstFruit);

secondFruit = fruits[1]
console.log(secondFruit);

let lastFruit = fruits[3]
console.log(lastFruit);

// calculate last index
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit);


// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
console.log(numbers.length); // to know the size of the array, which is 6
console.log(numbers);   //[0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]);     // 0
console.log(numbers[5]);    // 100

lastIndex = numbers.length - 1
console.log(numbers[lastIndex]);    // 100


// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB

// ******************
const countries1 = [
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
    'Kenya'
  ] //
console.log(countries1)      // -> all countries in array
console.log(countries1[0])   //  -> Albania
console.log(countries1[10])  //  -> Kenya

lastIndex = countries1.length - 1;
console.log(countries1[lastIndex]) //  -> Kenya

//************************* 
const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
] // List of food products
  
console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar

// Modifyinh array element

const numbers1 = [1, 2, 3, 4, 5]
numbers1[0] = 10  // changing 1 at index 0 to 10
numbers1[1] = 20   // changing 2 at index 1 to 20

console.log(numbers1);

//********* */
countries1[0] = 'Afghanistan' // replacing Albania by Afghanistan
lastIndex = countries1.length - 1
countries1[lastIndex] = 'Korea' // replacing kenya by korea

console.log(countries1);


// Methods to manipulate array
/* 
Array - Length - concat - indexOf - slice - splice - join - toString - includes - lastIndexOf - isArray - fill - push - pop - shift - unshift
*/

// Array Constructor
const arr1 = Array()    // empty array
console.log(arr1);

const eightEmptyValues = Array(8) // creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// Creating static values with fill
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

// Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList);  // [1, 2, 3, 4, 5, 6]

const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

console.log(fruitsAndVegetables)

// Getting array length
console.log(numbers.length); // 6 is the size of the array

// getting index an element in arr array
const numbers5 = [1, 2, 3, 4, 5]

console.log(numbers5.indexOf(5)); // 4
console.log(numbers5.indexOf(0)); // -1
console.log(numbers5.indexOf(1)); // 0
console.log(numbers5.indexOf(6)); // -1

// cehck an element if it exist in an array
    // check items n a list
let index = fruits.indexOf('banana') // 0

if (index === -1) {
    console.log('This fruit does not exist in the array');
} else {
    console.log('This fruit does exist in the array');
}
// this fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

//check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array

// Getting last index of an element in array

const num = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(num.lastIndexOf(2)); // 7
console.log(num.lastIndexOf(0)); // -1
console.log(num.lastIndexOf(1)); // 6
console.log(num.lastIndexOf(4)); // 3
console.log(num.lastIndexOf(6)); // -1

// includes

console.log(num.includes(5));   // true
console.log(num.includes(0));   //false
console.log(num.includes(1));   //true
console.log(num.includes(6));   // alse

console.log(webTechs.includes('Node')); // true
console.log(webTechs.includes('C')); // false


// Checking Array
// check if the data type is an array
console.log(Array.isArray(numbers)); // true

const sayi = 100
console.log(Array.isArray(sayi));   //false

// Converting array to string
console.log(numbers5.toString()); //1,2,3,4,5

const names = ['Gökhan', 'Arda', 'Ata', 'Alp']
console.log(names.toString()); // Gökhan,Arda,Ata,Alp

// Joining array elements
console.log(numbers5.join()); // 1,2,3,4,5

console.log(names.join()); //  Gökhan,Arda,Ata,Alp
console.log(names.join('')); // GökhanArdaAtaAlp
console.log(names.join(' ')); // Gökhan Arda Ata Alp
console.log(names.join(', ')); // Gökhan, Arda, Ata, Alp
console.log(names.join(' # ')); // Gökhan # Arda # Ata # Alp


console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// slice array elements

console.log(numbers5.slice()) // -> it copies all  item
console.log(numbers5.slice(0)) // -> it copies all  item
console.log(numbers5.slice(0, numbers.length)) // it copies all  item
console.log(numbers5.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// Splide method in array
numbers5.splice()
console.log(numbers5); // remove all items

numbers5.splice(0, 1)
console.log(numbers5); // remove the first item

numbers5.splice(3, 3, 7, 8, 9)
console.log(numbers5.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


// Adding item to an array using push

const arr2 = ['item1', 'item2', 'item3']
arr2.push('new item')
console.log(arr2); // ['item1', 'item2','item3','new item']

numbers5.push(6)
console.log(numbers5); // (7) [2, 3, 4, 7, 8, 9, 6]


numbers5.pop() // remove one item from the end
console.log(numbers5); // (6) [2, 3, 4, 7, 8, 9]


fruits.push('apple')
console.log(fruits); // (5) ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits); // (5) ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime]


// Removing the end element using pop
numbers5.pop()
console.log(numbers5); // (5) [2, 3, 4, 7, 8]

// removing an element from the beginning
numbers5.shift()
console.log(numbers5); // (4) [3, 4, 7, 8]

numbers5.unshift(0) // add one item from the beginning
console.log(numbers5); // (5) [0, 3, 4, 7, 8]


// reversing array order
numbers5.reverse() // reverse array order
console.log(numbers5); // (5) [8, 7, 4, 3, 0]

numbers5.reverse() 
console.log(numbers5); // (5) [0, 3, 4, 7, 8]

// sorting elements in array
webTechs.sort()
console.log(webTechs); // (7) ['CSS', 'HTML', 'JS', 'MongDB', 'Node', 'React', 'Redux']

webTechs.reverse()
console.log(webTechs); // (7) ['Redux', 'React', 'Node', 'MongDB', 'JS', 'HTML', 'CSS']

// Array of arrays
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Python']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]

console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]