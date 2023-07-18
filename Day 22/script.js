// DAY 22

// Creating an element

let title = document.createElement('h1')
title.setAttribute('id', 'title')
title.style.fontSize = '24px'
title.textContent = 'Creating HTML element DOm day 2'

console.log(title)

// creating elements

let titles 
for(let i = 0; i < 3; i++) {
    titles = document.createElement('h1')
    titles.classList.add('titles')
    titles.style.fontSize = '24px'
    titles.textContent = i

    console.log(titles)
    // appending chil to a parent element

    document.body.appendChild(titles)
}


// removing a child element from a parent node

const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)
}

// or
ul.innerHTML = ''