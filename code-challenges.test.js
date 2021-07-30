// ASSESSMENT 2: Coding practical questions with Jest

const { expect, describe, test } = require("@jest/globals")

// const { test } = require("jest-circus")
// const { describe } = require("yargs")

// const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
 
// describe("divideBy", () => { 
//     test("returns a num takes a number as an argument and decides if the number is evenly divisble by three or not" , () => {
//         var num1 =15
//         var num2 = 0
//         var num3 = -7
//         expect(divideBy(num1)).toEqual(`15 is divisble by three`)
//         expect(divideBy(num2)).toEqual(`0 is divisble by three`)
//         expect(divideBy(num3)).toEqual(`-7 is not divisble by three`)

//        })
//     })
//     const divideBy = (num) => {
//          if(num % 3 === 0){
//           return `${num} is divisble by three`
//           }else if(num % 3){
//               return `${num} is not divisble by three`
//           }
//         }

        // i am not going to lie the first problem was the biggest challenge thank god for leacture examples and the syllabus!!!! i was stuck on this since friday i try 5 different methods and none of them work i honestly wanted to give up but i am tired of losing so i gave it my all!!!!
        
// var num1 = 15
// Expected output: "15 is divisible by three"

// var num2 = 0
// Expected output: "0 is divisible by three"

// var num3 = -7
// Expected output: "-7 is not divisible by three"



// b) Create the function that makes the test pass.

  


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// describe("capitalizeFirst", () => {
//     test("returns an array with all the words capitalized", () => {
//         var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         var randomNouns2 = ["temperature", "database", "chopstick", "mango", "deduction"]
//         expect(capitalizeFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capitalizeFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopstick", "Mango", "Deduction"])
//     })
// })


// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.
// const capitalizeFirst = (array) => {
//     return array.map(value => {
//      return value[0].toUpperCase() + value.slice(1)
//     })
// }

// i feel like i am almost there for question 2 but i don't know what else i was missing i even try console.log and it wouldn't work hahaha but it's all good i try my best for this one and it was a hell of a battle.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    test("logs the index of the first vowel", () => {
        var vowelTester1 = "learn"
        var vowelTester2 = "academy"
        var vowelTester3 = "challenge"
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})
// var vowelTester1 = "learn"
// Expected output: 1
// var vowelTester2 = "academy"
// Expected output: 0
// var vowelTester3 = "challenge"
// Expected output: 2



// b) Create the function that makes the test pass.

// for question 3 it was a tricky one i couldn't figure out a function to do this.
const firstVowel = (string) =>{
    const vowels = ["a", "e", "i", "o", "u"]
    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i]))
        return i
    }
}