// DAY 17

// sessionStorage & localStorage

// sessionStorage :sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page session. That means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, we will focus only on localStorage.

// localStorage: The HTML5 localStorage is the para of the web storage API which is used to store data on the browser with no expiration data. The data will be available on the browser even after the browser is closed. localStorage is kept even between browser sessions. This means data is still available when the browser is closed and reopened, and also instantly between tabs and windows.

// setItem(), getItem(), removeItem(), clear(), key()

// the keys and the values are always strings!!!

// Use case of Web Storages
/*
    -store data temporarily
    -saving products that the user places in his shopping cart
    -data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
    can be used offline completely using localStorage
    -Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be     stored in strings using Base64 encoding.
    -can be used for user authentication method
*/

// HTML5 Web Storage Objects

/*
-   window.localStorage - stores data with no expiration date
-   window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. Let us see the available methods for the Web Storage objects.
*/

// Web Storage objects:
/*
localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/

console.log(localStorage) // null

//Setting item to the localStorage

localStorage.setItem('firstName', 'Gökhan') // even if I erase this this still be in the storage
console.log(localStorage)

localStorage.setItem('age', 21)
console.log(localStorage)

// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first.

const skills = ['HTML', 'CSS', 'JS', 'React']
const skillsJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

let skill = [
    { tech: 'HTML', level: 10},
    { tech: 'CSS', level: 9},
    { tech: 'JS', level: 8},
    { tech: 'React', level: 9},
    { tech: 'Redux', level: 10},
    { tech: 'Node', level: 8},
    { tech: 'MongoDB', level: 8}
]

let skillJSON = JSON.stringify(skill)
localStorage.setItem('skill & level', skillJSON)
console.log(localStorage)

const user = {
    firstName: 'Gökhan',
    age: 21,
    skills: ['HTML', 'CSS', 'JS', 'React']
}

const userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)
console.log(localStorage)

// Getting item from the localStorage

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skillsGet = localStorage.getItem('skills')
console.log(firstName, age, skillsGet) //  Gökhan 21 ["HTML","CSS","JS","React"] // all of them are strings

let skillsObj = JSON.parse(skillsGet, undefined, 4)
console.log(skillsObj) // (4) ['HTML', 'CSS', 'JS', 'React'] // we chaneg it back to array

localStorage.removeItem('skill & level')

// localStorage.clear()



// example 
let basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [
    {
        id: 1,
        title: 'Macbook Air 2020',
        price: 20_000
    },
    {
        id: 2,
        title: 'Logitech keyboard',
        price: 700
    },
    {
        id: 3,
        title: 'İphone SE 2020',
        price: 18_000
    }
]

function saveTOStorage() {
    localStorage.setItem('basket', JSON.stringify(basket))
}

function addBasket(productId) {
    const basketIndex = basket.findIndex(b => b.productId === productId)
    if(basketIndex > -1) {
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount: basket[basketIndex].amount + 1
        }
    } else{
        basket.push({
            productId,
            amount: 1
        })
    }
    saveTOStorage()
}
function removeBasket(productId) {
    const item = basket.find(p => p.productId === productId)
    if(item) {
        if(item.amount === 1) {
            basket = basket.filter(p => p.productId !== productId)
        } else {
            basket = basket.map(i => {
                if(i.productId === productId) {
                    i.amount -= 1
                }
                return i
            })
        }
    }
    saveTOStorage()
}

function totalPrice() {
    return basket.reduce((prev, basket) => {
        const product = products.find(p => p.id === basket.productId)
        return prev += (product.price * basket.amount)
    }, 0)
}

// addBasket(2)
// addBasket(3)

// console.log(basket)
// // removeBasket(2)
// console.log(basket)
// console.log(totalPrice())
// addBasket(1)
// addBasket(1)
// addBasket(2)

console.log(totalPrice())
// removeBasket(1)