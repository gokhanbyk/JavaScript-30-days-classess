// Day 14 - Error Handling

try {
    // code that may throw an error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

// try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

// catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

// finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.


try {
    let firstName = 'Gökhan'
    let lastName = 'Biyikoglu'
    let fullName = firstName + '' + surName // if we change surname to lastname we can get fullname in finally block
} catch(err) {
    // console.log('Bir hata var') // if we left empty
    console.log(err) 
    // ReferenceError: surName is not defined at script.js:21:37
} finally {
    console.log('In any case finally block will be executed')
    // In any case finally block will be executed
}


try {
    let lastName = 'Biyikoglu'
    let fullName = firstName + '' + lastName
} catch (err) {
    console.table(err)
    console.log('Name of the error', err.name) // Name of the error ReferenceError
    console.log('Error message', err.message) // Error message firstName is not defined
} finally {
    console.log('In any csae final block will be executed') // In any csae final block will be executed
}


// throw: create a custom error. use the throw statement to throw an exception.

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    
    try {
        if(x == '') throw 'empty'
        if(isNaN(x)) throw 'not a number'
        x = Number(x)
        if(x < 5) throw 'too low'
        if(x > 10) throw 'too high' 
    } catch (err) {
        console.log(err)
    }
}
// throwErrorExampleFun()


// Error Types

// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared
    let firstName = 'Biyikoflu'
    // let fullName = firstName + ' ' + lastName
    // console.log(fullName)
    // Uncaught ReferenceError: lastName is not defined at <anonymous>:2:35

// SyntaxError: A syntax error has occurred
let square = 2 * 2
console.log(square)
// console.log('Hello, world") // Uncaught SyntaxError: Unexpected identifier

// TypeError: A type error has occurred
let num = 10
// console.log(num.toLowerCase()) 
//Uncaught TypeError: num.toLowerCase is not a function at <anonymous>:2:17
