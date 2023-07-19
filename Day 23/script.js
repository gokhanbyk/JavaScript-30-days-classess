// DAY 23

// Event Listeners
/*
onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload

- syntax
    selectedElement.addEventListener('eventlistner', function(e) {
    // the activity you want to occur after the event will be in here
    })
    // or

    selectedElement.addEventListener('eventlistner', e => {
    // the activity you want to occur after the event will be in here
    })

*/

// Click
const button = document.querySelector('#first')
button.addEventListener('click', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ' , e.target)
    console.log(
        'e.target.textContent gives content of selected element: ', e.target.textContent
    )
})

// Or an event can be also attached directly to the HTML element as inline script

const clickMe = () => {
    alert('we can attach event on HTML element')
}

// Double Click

const secondButton = document.querySelector('#second')
secondButton.addEventListener('dblclick', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
      'e.target.textContent gives content of selected element: ',
      e.target.textContent
    )
})

// mouse enter
const thirdButton = document.querySelector('#third')
thirdButton.addEventListener('mouseenter', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
})

/**
click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse pointer enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout - when the mouse pointer out from the element
input - when value enter to input field
change - when value change on input field
blur - when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading page
*/

// Getting value from an input element

const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const bmiButton = document.querySelector('#bmi')

let bmi 
bmiButton.addEventListener('click', () => {
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})


// input event and change
// In the above example, we managed to get input values from two input fields by clicking button. How about if we want to get value without click the button. We can use the change or input event type to get data right away from the input field when the field is on focus.

const input = document.querySelector('#say')
const p = document.querySelector('#bir')

input.addEventListener('input', e => {
    p.textContent = e.target.value
})

// blur event
// In contrast to input or change, the blur event occur when the input field is not on focus.

const inputİki = document.querySelector('.mass')
const pİki = document.querySelector('#iki')

inputİki.addEventListener('blur', (e) => {
    pİki.textContent = 'Field is required'
    pİki.style.color = 'red'
})


// keypress, keydown and keyup

document.body.addEventListener('keypress', e => {
    // alert(e.key)
    alert(e.keyCode)
})