// Conditionals

// IF
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`);
}
// 3 is a positive number
let isRaining = true
if(isRaining) {
    console.log('Remember to take your rain coat.');
}

// IF ELSE
if (num > 0) {
    console.log(`${num} is a positive number`);
} else {
    console.log(`${num} is a negative number`);
}
// 3 is a positive number

num = -3
if (num > 0) {
    console.log(`${num} is a positive number`);
} else {
    console.log(`${num} is a negative number`);
}
// -3 is a negative number

if(isRaining) {
    console.log('Remember to take your rain coat.');
} else {
    console.log('NO need for a rain coat.');
}
// you need a rain coat

isRaining = false
if(isRaining) {
    console.log('Remember to take your rain coat.');
} else {
    console.log('NO need for a rain coat.');
}
// no need for a rain coat

// ELSE IF

let a = 0 
if(a > 0) {
    console.log(`${a} is a positive number`);
} else if (a < 0) {
    console.log(`${a} is a negative number`);
} else if (a == 0) {
    console.log(`${a} is zero`);
} else {
    console.log(`${a} is not a number`);
}


let weather = 'sunny'
if (weather === 'rainy') {
    console.log('you need a rain coat');
} else if (weather === 'cloudy') {
    console.log('it might be cold, you need a jacket');
} else if (weather === 'sunny') {
    console.log('go out freely');
} else {
    console.log('no need for a rain coat');
}

// SWITCH CASE
weather = 'cloudy'
switch(weather) {
    case 'rainy':
        console.log('You need a rain coat');
        break
    case 'cloudy':
        console.log('it might be cold, you need a jacket');
        break
    case 'sunny':
        console.log('go out freely');
        break
    default:
        console.log('no need for rain coat');
}

let dayUserInput = prompt('What da is today?')
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('today is monday');
        break
    case 'tuesday':
        console.log('today is tuesday');
        break
    case 'wednesday':
        console.log('today is wednesday');
        break
    case 'thursday':
        console.log('today is thursday');
        break
    case 'friday':
        console.log('today is friday');
        break
    case 'saturday':
        console.log('today is saturday');
        break
    case 'sunday':
        console.log('today is sunday');
        break
    default:
        console.log('not a week day');
}

num = prompt('enter number')
switch (true) {
    case num > 0:
        console.log('number is positive');
        break
    case num == 0:
        console.log('number is zero');
        break
    case num < 0:
        console.log('number is negative');
        break
    default:
        console.log('Entered value was not a number');
}

// Ternary Operators
isRaining = true
isRaining
    ? console.log('you need a rain coat')
    : console.log('no need for a rain coat')