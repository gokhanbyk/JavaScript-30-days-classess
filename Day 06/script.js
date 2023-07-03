console.log(countries);

// LOOPS

// FOR loops
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []

for(let i = 0; i < countries1.length; i++) {
    newArr.push(countries1[i].toUpperCase())
}
console.log(newArr);


const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] // can be shorten, sum += numbers[i]
}
console.log(sum); // 15

const newArr1 = []
sum = 0
for(let i = 0; i < numbers.length; i++) {
    newArr1.push(numbers[i] ** 2)
}
console.log(newArr1); // [1, 4, 9, 16, 25]

// WHILE LOOP
let i = 0
while (i <= 5) {
    console.log(i);
    i++
} // 0 1 2 3 4 5

// DO WHILE LOOP
do {
    console.log(i);
    i++ 
} while (i <= 5)

// FOR OF LOOP

for (const num of numbers) {
    console.log(num);
    console.log(num * num);
    sum += num
} // 1 4 9 16 25
console.log(sum);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase()); // HTML CSS JAVASCRIPT REACT NODE MONGODB

    console.log(tech[0]);  // get only the first letter of each element,  H C J R N M
}

const newArr2 = []
for(const country of countries1) {
    newArr2.push(country.toUpperCase())
}
console.log(newArr2); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// BREAK
for(let i = 0; i <= 5; i++) {
    if(i == 3) {
        break
    }
    console.log(i);
}// 0 1 2

// CONTİNUE
for(let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i);
}// 0 1 2 4 5
