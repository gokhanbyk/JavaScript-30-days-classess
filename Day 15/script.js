// DAY 15 Classes

// Defining a classes

// syntax
// class ClassName {
    //  code goes here
// }

class BlaBla {
    // code goes here
}

// Class Instantiation: Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

class İnsan {
    // code goes here
}
const insan = new İnsan()
console.log(insan) // İnsan {}

// Class Constructor : The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

class Person {
    constructor(firstName, lastName, age, country = 'Türkiye', city = 'İzmir') {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    appendSkill(skill) {
        this.skills.push(skill)
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }

    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `he knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills} `
        return info
    }

    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if(hours < 10) {
            hours = '0' + hours
        }
        if(minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

const person = new Person()
const person1 = new Person('Gökhan', 'Bıyıkoğlu')
const person2 = new Person('Gökhan', 'Bıyıkoğlu', 21, 'Turkey', 'İzmir')

console.log(person1) // Person {firstName: 'Gökhan', lastName: 'Bıyıkoğlu'}
console.log(person) // Person {firstName: undefined, lastName:undefined}
console.log(person2) // Person {firstName: 'Gökhan', lastName: 'Bıyıkoğlu', age: 21, country: 'Turkey', city: 'İzmir'}


// Default values with constructor
const person3 = new Person('Arda', 'Şalvarlılar', 21)

console.log(person3) // Person {firstName: 'Arda', lastName: 'Şalvarlılar', age: 21, country: 'Türkiye', city: 'İzmir'}

// Class Methods 
console.log(person1.getFullName()) // Gökhan Bıyıkoğlu
console.log(person3.getFullName()) // Arda Şalvarlılar


// Properties with initial Value // score and skills
console.log(person1.score) // 0
console.log(person3.score) // 0

console.log(person1.skills) // []
console.log(person3.skills) // []


// getter: The get method allow us to access value from the object
console.log(person1.getScore) // do not need parenthesis
console.log(person3.getScore) 

console.log(person1.getSkills)
console.log(person3.getSkills)

// setter: allow us to modify the value of certain properties
person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.appendSkill('JavaScript')

person3.setScore = 1
person3.setSkill = 'Planning'
person3.setSkill = 'Managing'
person3.appendSkill('Organizing')

console.log(person1.score) // 1 
console.log(person3.score) // 1

console.log(person1.skills) // (3) ['HTML', 'CSS', 'JavaScript']
console.log(person3.skills) // (3) ['Planning', 'Managing', 'Organizing']

// regular method
console.log(person1.getPersonInfo()) // Gökhan Bıyıkoğlu is undefined. He lives İzmir, Türkiye. he knows HTML, CSS and JavaScript 
console.log(person3.getPersonInfo()) // Arda Şalvarlılar is 21. He lives İzmir, Türkiye. he knows Planning, Managing and Organizing 

// Static Method
console.log(Person.favoriteSkill()) // react
console.log(Person.showDateTime()) // 11.7.2023 15:12

// Inheritance : can access all the properties and the methods of the parent class. this reduces repetition of code.

class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }
    
    saySomething() {
        console.log('I am a child of the person class')
    }

    getPersonInfo() {
        let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
    }
}

const s1 = new Student('Gökhan', 'Bıyıkoğlu', 21, 'Turkey', 'İzmir')
console.log(s1) // Student {firstName: 'Gökhan', lastName: 'Bıyıkoğlu', age: 21, country: 'Turkey', city: 'İzmir', …}
console.log(s1.saySomething()) //  I am a child of the person class
console.log(s1.getFullName()) // Gökhan Bıyıkoğlu
console.log(s1.getPersonInfo()) // Gökhan Bıyıkoğlu is 21. He lives İzmir, Turkey.  


// Overriding methods: 

const s2 = new Student(
    'GÖkhan',
    'Biyikoglu',
    21,
    'Turkey',
    'İzmir',
    'Male'
) 

const s3 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female') 
s2.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JS'

s3.setScore = 1
s3.setSkill = 'Planning'
s3.setSkill = 'Managing'
s3.setSkill = 'Organizing'

console.log(s2)
console.log(s2.saySomething()) // I am a child of the person class
console.log(s2.getFullName()) // GÖkhan Biyikoglu
console.log(s2.getPersonInfo()) // GÖkhan Biyikoglu is 21. He lives in İzmir, Turkey. 


console.log(s3.saySomething()) // I am a child of the person class
console.log(s3.getFullName()) //  Lidiya Tekle
console.log(s3.getPersonInfo()) // Lidiya Tekle is 28. She lives in Helsinki, Finland. SHe knows Planning, Managing and Organizing
 
