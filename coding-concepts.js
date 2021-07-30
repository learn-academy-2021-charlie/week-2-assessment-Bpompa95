// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer:["C", "h", "a", "r", "l", "i", "e", "2", "0", "2", "1"]
// b) Verify and explain:i got the answer correct because you are splitting each word seperate. And i remember on the console.log this symbole split("") makes word seprate from each other with the quotation marks.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:undefined
// b) Verify and explain:i got this answer correct because you forgot the return. Which the argument that creates the function and prints out your snetnce.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:To be honest i had to think about this really hard but i got the answer right becuase you are mulitiplying each number by 2.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer:[12, 14]
// b) Verify and explain:i got this answer correct because 1 of course you are looking for oddsOnly and 2 the filter method and the filter creates an array with all array elements that has to pass the test and 3 the three equal signs because 2 and o are odd numbers so the statment has to be true.


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer: student: "George", cohort: "Charlie", year: 2021
// b) Verify and explain: i got this answer correct because you are calling learn student so that brings out the blue print you created for George.
