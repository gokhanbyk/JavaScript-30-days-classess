// DAY 13 CLASS

// Console Object Methods

// console.log()
// Showing output on browser console

console.log('30 Days of JavaScript') // 30 Days of JavaScript

// Substitution
console.log('%d %s of JavaScript', 30, 'Days') // 30 Days of JavaScript

// CSS
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text

// console.warn()
// to give warning on browser
console.warn('This is a warning')

console.warn(
    'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

// console.error()
// shows an error message
console.error('This is an error message')
console.error('We all make mistakes')

// console.table()
// display data as a table on the console. must be an array or an object, and one additional optional parameter columns

const names = ['Gökhan', 'Arda', 'Mehmet', 'Emre']
console.table(names)

const user = {
    name: 'Gökhan',
    title: 'Programmer',
    country: 'Turkey',
    city: 'Izmir',
    age: 21
}
console.table(user)

const countriesConsole = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countriesConsole)

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
]
console.table(users)


// console.time()
// starts a timer you can use to track how long an operation takes. give each timer a unique name, and may have up to 10,000 times running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in miliseconds, that aelapsed since the timer was started


console.time('Regular for loop')
for(let i = 0; i < countriesConsole.length; i++) {
    console.log(countriesConsole[i][0], countriesConsole[i][1])
}
console.timeEnd('Regular for loop')


console.time('for of loop')
for(const [name, city] of countriesConsole) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countriesConsole.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')


// console.info()
// it displays information messagew on browser console

console.info('30 Days oF JavaScript challenge is trending on github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')


// console.asser()
// writes an error message to the console if the assertion is false. if the assertion is true, nothing happens.

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}


// console.group()
// can help to group different log groups

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countriesConsole)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


// console.count()
// it prints the number of ties the count() is called. takes a string label parameter.

const func = () => {
    console.count('FUnction has been called')
}
func() // FUnction has been called: 1
func() // FUnction has been called: 2
func() // FUnction has been called: 3

// console.clear()
// cleans the browser console

console.clear()
