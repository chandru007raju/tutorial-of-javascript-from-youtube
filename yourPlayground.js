// import prompt to obtain input from user
const prompt = require("prompt-sync")();

//****************START*********************/


// console.log('hello world')
// console.log('hi chandu')

//      variables(const,var,let)

// let name ='chandu'
// console.log(name)

// let sentence='hello how r u doing'
// console.log(sentence)

//    operators(+,-,*,/,%)

// let food = 20
// console.log(food)
// tipPercentage = 0.2
// tipAmount = food * tipPercentage
// console.log(tipAmount)

// food = Number(prompt('how much was the food:')) //user input
// console.log(food)
// tipPercentage = Number(prompt('tipPercentage ?'))/100 //user input

// tipAmount = food * tipPercentage

// console.log("tipamount:",tipAmount)
// total = food + tipAmount
// console.log("total payable:",total)



//   data types (strings,numbers)
/*
numbers 👉 1, 5, 15, 11.5, 2.4
strings 👉 'hello', "welcome"
array 👉 []
objects 👉 {}
boolean 👉 true/false (banks)

*/
/*
math operators
multiply *
divide /
exponential **
modulo/remainder % (5%2)
add +
sub -

*/
/*
maths Methods
floor(RoundDown)
ceil (RoundUp)
Random (random numbers)...we can use this to get a number between numbers
 like number within 6..that is [random()*3]

*/
/* Baby Weather app----Using{Conditionals}
// if rain 👉 'Grab ur Umbrella '
// else 👉 'wear ur sun glasses '
*/
// let weather='rain'
// let weather='sunny'

/*lets use user input*/

// let weather = prompt('how is the weather?,sunny or rainy:')

// if (weather == 'rainy'){
//     console.log('Grab Umbrella')
// }else{
//     console.log('wear SunGlasses')
// }


// Conditional operators
// ==, ===, >, <, >=, <=, !=, !==

//   user input

// fruit = prompt('what is ur fav fruit:')
// console.log(fruit)

// var c;
// c = prompt("enter your name:");
// console.log("yourname =" ,c);

// var a,b;
// a = prompt("enter first number")
// b = prompt("enter second number")
// console.log(a+b)

// var a,b;
// a = parseInt(prompt("enter first number"))
// b = parseInt(prompt("enter second number"))
// console.log(a+b)


/**************************************************/
/********************Functions********************/

function sayMyName(){           //simple function **
    console.log('qazi')          // function with name sayMyName
    console.log('qazi')          // and it has 0 arguements
    console.log('qazi')          // it logs out ur name to the console
    console.log('qazi')
}

// sayMyName()

//*************************
function sayMyName2(name){           //dynamic function **
    console.log(name)               //with name as 1 arguement called name**
    console.log(name) 
}
// sayMyName2('chandu')                 // Call that function**

// function greeting(name){
//     console.log('hi name, Nice meeing You!')
// }
// greeting('chandu')

// function greeting(name){
//     greet = 'hi ' + name +',Nice to meet you!'    //this is annoying  
//     console.log(greet)
// }
// greeting('chandu')

function greeting(name){
//greet = 'hi ' + name +',Nice to meet you!' //we can use proper javaScript here
// template literals ``
    greet = `hi ${name}, Nice to meet you!`  // using $ symbol and wraping arguement
    console.log(greet)
}
// greeting('johny depp')

// function sum(a, b){        //type 1
//     // return
//     return a + b
// }

// console.log(sum(1,2))

// function sum(a, b){
//     // return
//     return a + b      // what if we did not use  this return type
// }

// num1 = sum(1,2)
// console.log(num1)

// function sum(a, b){
//     // return
//     console.log(a + b)      // what if we did not use  this return type
// }

// num1 = sum(1,2)
// console.log(num1)           // out will have error saying undefined and this function cant be used in other places this becomes useless..becoz we cant store console.log

function sum(a, b){
    // return
    return a + b      // what if we did not use  this return type
}

// num1 = sum(1,2)
// console.log(num1)


function calculateFoodTotal(food, tip){
const tipPercentage = tip / 100 
const tipAmount = food * tipPercentage
const total = sum(food, tipAmount)
return total
}
//  console.log(calculateFoodTotal(300,20))

//**************************************************************
//ES6
//  //Arrow Functions =>
 const sumArrow = (a, b) => {
 return a + b
 }
 //Arrow function =>  with explicit return
 //IMPORTANT: For implicit return, remove squigglies{}
 const sumArrow2 = (a, b) => a + b

//  console.log(sumArrow2(10, 90))

//*********************************************************//
//**********************ARRAYS*****************************//

// const groceries = ['apple','banana','orange','grape']
// console.log(groceries)
// Grab the 3th index  or 4th item of array
// console.log(groceries[3])

//     Array Methods-----PUSH

// groceries.push('papaya')
// console.log(groceries)
// groceries.push('chocolate')
// console.log(groceries)

//     Array Methods-----SLICE

//     Start from 0 INCLUSIVE and Upto 2 [0, 1]{tht's 2 elements}
// console.log(groceries.slice(0, 2))

//     Start from 0 INCLUSIVE and Upto 5 [0, 6],[0, 1, 2, 3, 4, 5]
// console.log(groceries.slice(0, 5))
// console.log(groceries.slice(3, 6))

//Array Methods (slice, push, indexof, length)
// console.log(groceries.indexOf('apple'))         //indexof Method
// console.log(groceries.indexOf('papaya'))
// console.log(groceries.indexOf('chocolate'))

// console.log(groceries.length)         // length Method to get length of Array

//***********************************************************
//***************************OBJECTS***************************

// Objects are a type of variable, quit  similar to Arrays but they have something called key-value pairs.in eg if person is object then name and shirt will be his property.

//OBJECTS
// const person = {}      // This is an Object with name person

const man = {name: 'chandu', shirt: 'white'} //simple way to write object

const superman = {
    name: 'raju', 
    shirt: 'white'
}                                       // how pros write the same thing
// console.log(man.name)
// console.log(superman.name)

// How to access objects
// 1. Dot Notation
// 2. bracket Notation

// console.log(man['name'])                  // access using Brackets

// console.log(superman['name']) 
// console.log(superman['shirt'])    


//         assign objects
//      2 Ways...
//   1 Dot notation
//   2 bracket notation

// superman.pant = 'blue'              // Assigning from Dot

// superman['phone'] = '9060665955'       // Assigning from Brackets
// superman['address'] = 'mysore66'

// console.log(superman['name']) 
// console.log(superman['shirt'])   
// console.log(superman['pant'])   
// console.log(superman['phone'])

// console.log(superman)

// const lamborgini = {             // create an object called lambogini
//     color: 'red', 
//     model: 'cv800'
// }
// const car = {             // create an object called swift car
//     name: 'swift',
//     color: 'red', 
//     model: '800',
//     weight: '850kg',
// }
// // console.log(car)
// console.log(car['name'])
// console.log(car['color'])
// console.log(car['model'])



// console.log(lamborgini)

// const spiderman = {               // creating another object with name spiderman
//     name : 'star',
//     shirt : 'purple',
//     panttype : 'jeans',
//     capcolor : 'black'
// }
// console.log(spiderman)

// const person ={
//     name: 'chandu',
//     shirt: 'green'
// }
// console.log(person)                   
// console.log(person.shirt)

//     ES6 Arrow Function (2 Arguments)
// Object
// Template Literals

// const introducer = (name, shirt) => {
//     const person ={
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         liabilities: 40000
//     }
//         // here we are using the template literals called intro
//     const intro = `hi, my name is ${person.name}, and my shirt color is ${person.shirt} and my net worth is ${person.assets-person.liabilities} Rs`
//     return intro
// }
// console.log(introducer('chandu', 'black'))
// console.log(introducer('messi', 'blue'))


//     if this was hardcoded this would be something like this....

// const introducer = (name, shirt) => {   
//     const intro = `hi, my name is ${name}, and my shirt color is ${shirt}`
//     return intro
// }
// console.log(introducer('chandu', 'black'))

//***************************************************************
//          Object Methods [Eg: car.start(), car.drive(),car.break(), car.stop()]

// const introducer = (name, shirt) => {
//     const person ={
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         liabilities: 40000,
//         networth: function (){
//             return this.assets - this.liabilities
//         }
//     }
//         // here we are using the template literals called intro
//     const intro = `hi, my name is ${person.name}, and my shirt color is ${person.shirt} and my net worth is ${person.networth()} Rs`
//     return intro
// }
// console.log(introducer('chandu', 'black'))

//here we just used a function method inside the objects

//************************************************************
//                      For Loops


const fruits = ['apple','banana','orange','grape']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])  //Rather than cosoling multiple times we can use for loops

// for( let i = 0; i < fruits.length; i++ ) {             //for loop
//     console.log(fruits[i])
// }

// for (const fruit of fruits){          // JavaScript has Best Way Of writing this loop
//     console.log(fruit)
// }

// for (const john of fruits){         // JavaScript has Best Way Of writing this loop
//     console.log(john)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// for(let i=0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// for(const john of numbers){
//     console.log(john)
// }
// for(const num of numbers){
//     console.log(num)
// }

//Example problem to print another array containing double the value in the previous array

// let result = []

// for(const num of numbers){    
//     result.push(num*2)
// }
// console.log(result)

//          let write a function for the above result(DOUBLE FUNCTION)
// const double = (numbers) => {
//     result = []
//     for (const num of numbers){
//         result.push(num*2)        
//     }
//     return result
// }
// console.log(double([2, 4, 3]))

// const double = (numbers) => {       // Square Function
//     result = []
//     for (const num of numbers){
//         result.push(num**2)        
//     }
//     return result
// }
// console.log(double([2, 4, 3]))

// count how many letters are in phrase

// const howManyLetters = ( ) => {
//     const phrase = 'hey,can you go to plaground and play!!'
//     for (const letter in phrase){
//         console.log(Number(letter)+ 1)
//     }
// }
// howManyLetters()

//         other way of doing this

// const howManyLetters = ( ) => {
//     const phrase = 'hey,can you go to plaground and play!!'
//     let result = 0;

//     for (const index in phrase){
//         console.log(Number(index)+ 1)
//         result = Number(index) + 1
//     }

//     return {result}
// }
// console.log(howManyLetters())

// what if the user wants to type the phrase

// const howManyLetters = (phrase) => {
    
//     let result = 0;
//     for (const index in phrase){
//         console.log(Number(index)+ 1)
//         result = Number(index) + 1
//     }
//     return {result}
// }
// const phrase = prompt('write your phrase:')
// console.log(howManyLetters(phrase))

// Easiest Way to know the length

// const howManyLetters = (phrase) => {    
//     let result = phrase.length
//     return {result}
// }
// const phrase = prompt('write your phrase:')
// console.log(howManyLetters(phrase))

//   lets make a function that sums up Array

// const howManyLetters = (phrase) => {    
//     let result = phrase.length
//     return {result}
// }

// [1,2,4,4]
// result = 0
// result = 1
// result = 3
// result = 6
// result = 10

//sums up all numbers in tha array

// const sumArray = (numbers) => {
//     result = 0
//     for(const john of numbers){
//         result = result + john
//     }
//     return {result}
// }
// const numbers = [2, 3, 5, 4]
// console.log(sumArray(numbers))

// Lets Write a function for element which is max in an Array

// const maxArray = (numbers) => {
//     let result = numbers[0]
//     for(const john of numbers){
//         if(john>result){
//             result=john
//         }
//     }
//     return {result}
// }
// const numbers = [2, 3, 5, 8, 9, 4]
// console.log(maxArray(numbers))

//    Find Frequency in a Sentence
//*********
//*********
// const letterFrequency = (phrase) => {
//     let frequency = {}
//     //   make a frequency object {}
//     for(const letter of phrase){
//         //   check if letter exists in frequency
//         // if exists increment the value by + 1
//         if(letter in frequency){
//             frequency[letter] = frequency[letter] + 1
//             // else set the value to 1
//         }else{
//             frequency[letter] = 1
//         }
//     }return frequency
// }
//****************
//****************
// const phrase = 'chandrulovesdimple'
// const phrase = 'dimple'
// console.log(letterFrequency(phrase))

//    Incremental Operators
//    ++,--,+=,-=,

//      Word Frequency  input(dimple dimple dimple) expected output {dimple: 3}

// const wordFrequency = (phrase) =>{
//     frequency = {}
//    const words = phrase.split(' ')
//    console.log(words)
//    for (const word of words){
//     if(word in frequency){
//         frequency[word] = frequency[word] + 1
//     }else{
//         frequency[word] = 1
//     }
//    }return frequency
// }
// console.log(wordFrequency('dimple dimple dimple'))

// IMPORTANT::
// we have more similarity b/w these letterfrequency and word frequency program 
// so we can use following changes to the above program and solve calling the letterfrequency that we have created earlier.

// const wordFrequency = (phrase) => {    
//    const words = phrase.split(' ')
//    return letterFrequency(words)     
// }
// UserInput = prompt('write your sentences:') // also we can provide user input
// console.log(wordFrequency(UserInput))


// another program that i practised

// const wordFrequency1 = (phrase) => {
//     let frequency = {}
//     words = phrase.split (' ')
//     console.log(words)
//    for (const word of words){
//     if(word in frequency){
//         frequency[word] = frequency[word] + 1
//     }else{
//         frequency[word] = 1
//     }
//    }
//     return frequency
// }
// console.log(wordFrequency1('lol what lol'))