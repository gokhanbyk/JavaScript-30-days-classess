// DAY 21 DOM

// getting elements by tag name
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) // HTMLCollections
console.log(allTitles.length) // 4

for(let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // print ea h elements in the HTMLCollections
}
[...allTitles].forEach(item => console.log(item))

// getting elements by class name
const allTitles1 = document.getElementsByClassName('title')

console.log(allTitles1) // HTMLCollections
console.log(allTitles1.length) // 4

for(let i = 0; i < allTitles1.length; i++) {
    console.log(allTitles1[i]) // print ea h elements in the HTMLCollections
}

// getting an element by id

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

// getting elements bu using querySelector methods
// querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let firstTitle1 = document.querySelector('h1') // select the first available h1 element
console.log(firstTitle1)
let secondTitle = document.querySelector('#second-title') // select id with second-title
let firstTitle2 = document.querySelector('.title') // select the first available element with class title

// querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

const allQueryTitles = document.querySelectorAll('h1') // selects all the available h1 elements in the page

console.log(allQueryTitles.length) // 4
for(let i = 0; i < allQueryTitles.length; i++) {
    console.log(allQueryTitles[i]) 
}

allQueryTitles.forEach(title => console.log(title))
const allQueryTitlesClass = document.querySelectorAll('.title') // the same goes for selecting using class

// adding attribute
// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// adding attribute using setAttribute
const titles = document.querySelectorAll('h1')
titles[2].setAttribute('class', 'title')
titles[2].setAttribute('id', 'fourth-title')

// adding attribute without setAttribute

//another way to setting an attribute
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// adding class using classList
titles[2].classList.add('title', 'header-title')

// removing class using remove
titles[2].classList.remove('title', 'header-title')

// Adding Text to HTML element
    // textContent
titles[2].textContent = 'Fourth Title'
    // innerHTML
const lists = `
    <li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
    <li>30DaysOfFullStack Challenge Coming</li>
    <li>30DaysOfDataAnalysis Challenge Coming</li>
    <li>30DaysOfReactNative Challenge Coming</li>
    <li>30DaysOfMachineLearning Challenge Coming</li>`

const ul = document.querySelector('ul')
ul.innerHTML = lists
// to remove
ul.innerHTML = ''

// Adding style

// adding style color
titles.forEach((title, i) => {
    title.style.fontSize = '24px'
    if(i % 2 === 0) {
        title.style.color = 'red'
    } else {
        title.style.color = 'green'
    }
})

// adding style Background Color
titles.forEach((title, i) => {
    if(i % 2 === 0) {
        title.style.backgroundColor = 'green'
    } else {
        title.style.backgroundColor = 'red'
    }
})

// adding style font size
titles.forEach((title, i) => {
    if(i % 2 === 0) {
        title.style.fontSize = '20px'
    } else {
        title.style.fontSize = '30px'
    }
})