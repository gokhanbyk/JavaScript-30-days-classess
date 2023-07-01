// Day 10 

// SET 
    //Set is a collection of elements. Set can only contains unique elements

// creating an empty set
const companies = new Set()
console.log(companies) // Set(0) {}

// Creating set from array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages) // Set(4) {"English", "Finnish", "French", "Spanish"}

// Set is an iterable object and we can iterate through each elements.

for(const language of setOfLanguages) {
    console.log(language)
} //   English Finnish French Spanish

// Adding an element to a set
console.log(companies.size) // 0

companies.add('Google')
companies.add('Amazon')
companies.add('Facebook')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5
console.log(companies) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// use loop to add element to a set.

const companiesArray = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const setOfCompanies = new Set()
for (const company of companiesArray) {
    setOfCompanies.add(company)
}
console.log(setOfCompanies) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// Deleting an element a set

console.log(companies.delete('Google'))
console.log(companies.size) // 4

// Checking an element in the set // The has method can help to know if a certain element exists in a set.

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

// clearing the set

companies.clear()
console.log(companies) // Set(0) {}

// EXAMPLE

const langSet = new Set(languages)
console.log(langSet) //  Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []

for (const l of langSet) {
    const filteredLand = languages.filter((lang) => lang === l)
    console.log(filteredLand) // ["English", "English", "English"]
    counts.push({lang: l, count: filteredLand.length})
}
console.log(counts) // [{ lang: 'English', count: 3 },{ lang: 'Finnish', count: 1 },{ lang: 'French', count: 2 },{ lang: 'Spanish', count: 1 },]

// other use of set

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers) // Set(5) {5, 3, 2, 9, 4}

// Union of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C) // Set(6) {1, 2, 3, 4, 5,6}

// Intersection of sets
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)

console.log(F) // Set(3) {3, 4, 5}

// Difference of sets

let x = [1, 2, 3, 4, 5]
let y = [3, 4, 5, 6]

let X = new Set(x)
let Y = new Set(y)

let z = x.filter((num) => !Y.has(num))
let Z = new Set(z)

console.log(Z) // Set(2) {1, 2}

// MAP

// create an empty map
const mapEmpty = new Map()
console.log(mapEmpty) // Map(0) {}


// creating a map from an array
let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(map.size) // 3

// adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size) // 3 


// getting a value from Map
console.log(countriesMap.get('Finland')) // Helsinki

// Checking key in a Map
console.log(countriesMap.has('Finland')) // true

// Getting all values from map using loop

for(const country of countriesMap) {
    console.log(country) // (2) ["Finland", "Helsinki"] (2) ["Sweden", "Stockholm"] (2) ["Norway", "Oslo"]
}
for(const [country, city] of countriesMap) {
    console.log(country, city) // Finland Helsinki Sweden Stockholm Norway Oslo
}

