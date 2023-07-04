// DAY 12

// Creating a pattern with RegExp Constructor

// regex
// 1- regexp constructor

// let pattern = 'love'

//global and case insensitive
let flag = 'gi'

let regEx = new RegExp(pattern, flag)

// let regEx = new RegExp('love', 'gi')

let regex = /love/gi //regex deseni without constructor


// RegExp Object Methods

// testing for a match
const str = 'I love JavaScript'
let pattern = /love/
const result = pattern.test(str)
console.log(result) // true

// array containing all of the match: match() :
//match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.


let resultMatch = str.match(pattern)
console.log(resultMatch) 
//["love", index: 2, input: "I love JavaScript", groups: undefined]

const patternWithG = /love/g
resultMatch = str.match(patternWithG)
console.log(resultMatch) // ["love"]


// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

let resultWithSearch = str.search(patternWithG) // 2

// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced) // JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

// if we use g and i
txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced) // JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language

txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced) // JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language


// to clear %
txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  //I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

/*
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/


// Square Bracket
pattern = '[Aa]pple' // this square bracket means either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
let matches = txt.match(pattern)

console.log(matches) // ["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]


pattern = /[Aa]pple/g // this square bracket means either A or a
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches = txt.match(pattern)

console.log(matches) // ["Apple", "apple"]

// If we want to look for the banana, we write the pattern as follows:

pattern = /[Aa]pple|[Bb]anana/g
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
matches = txt.match(pattern)

console.log(matches)  // ["Apple", "banana", "apple", "banana", "Banana"]

// Escape character(\) in RegExp
pattern = /\d/g  // d is a special character which means digits
txt = 'This regular expression example was made in January 12,  2020.'
matches = txt.match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"]

// One or more times(+)
pattern = /\d+/g  // d is a special character which means digits
txt = 'This regular expression example was made in January 12,  2020.'
matches = txt. match(pattern)

console.log(matches)  // ["12", "2020"]

// Period(.)
pattern = /[a]./g  // this square bracket means a and . means any character except new line
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]

pattern = /[a].+/g  // . any character, + any character one or more times 
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

// Zero or more times(*)

pattern = /[a].*/g  //. any character, + any character one or more times 
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

// Zero or one times(?)
txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegExp
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\\b\w{4}\b/g  //  exactly four character words
matches = txt.match(pattern)
console.log(matches)  //['This', 'made', '2019']

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
matches = txt.match(pattern)
console.log(matches)  //['This', 'made']

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{4}/g  // a number and exactly four digits
matches = txt.match(pattern)
console.log(matches)  // ['2019']

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\d{1,4}/g   // 1 to 4
matches = txt.match(pattern)
console.log(matches)  // ['6', '2019']


// Cart ^
// Starts with
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /^This/ // ^ means starts with
matches = txt.match(pattern)
console.log(matches)  // ['This']

// Negation
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]

// Exact match :It should have ^ starting and $ which is an end.

pattern = /^[A-Z][a-z]{3,12}$/;
name = 'Asabeneh';
result = pattern.test(name)

console.log(result) // true
