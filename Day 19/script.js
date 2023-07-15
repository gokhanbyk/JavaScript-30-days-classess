// DAY 19 

// CLOSURE
//JavaScript allows writing function inside an outer function. If inner function access the variables of outer function then it is called closure.

function outerFunction() {
    let count = 0
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFUnc = outerFunction()

console.log(innerFUnc()) // 1
console.log(innerFUnc()) // 2
console.log(innerFUnc()) // 3

// another example
function outerFunc() {
    let count = 0
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne: plusOne,
        minusOne: minusOne
    }
}
const innerFuncs = outerFunc()

console.log(innerFuncs.plusOne()) // 1
console.log(innerFuncs.plusOne()) // 2
console.log(innerFuncs.minusOne()) // 1
console.log(innerFuncs.minusOne()) // 0