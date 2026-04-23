// 08 – FUNCTIONS (Homework)
// ----------------------------------------------

// Homework focus:
// - practice writing small functions
// - practice parameters + return
// - practice arrow functions
// - practice callbacks (just a little)
//
// ==============================================
// TASK 1 – “MAKE A MACHINE” (RETURN A VALUE)
// ==============================================
//
// STEP 1: Create a function named doubleNumber.
//         It takes ONE parameter: n
//         It returns n * 2

function doubleNumber(n) {
    return n * 2
}

// STEP 2: Test it 3 times with console.log.
//         Use labels so it’s clear.

console.log(`doublenumber Output of 4: ${doubleNumber(4)}`)
console.log(`doublenumber Output of 7: ${doubleNumber(7)}`)
console.log(`doublenumber Output of 203: ${doubleNumber(203)}`)
// ==============================================
// TASK 2 – “GUARDRAIL” (IF / ELSE INSIDE A FUNCTION)
// ==============================================
//
// STEP 3: Create a function named canWatchMovie.
//         It takes ONE parameter: age

function canWatchMovie(age) {
    if (age>=13) {
    return "Allowed ✅";
    } else { return "Not allowed ❌"};
};

// STEP 4: Inside the function:
//         - If age is 13 or higher, return "Allowed ✅"
//         - Else, return "Not allowed ❌"
//
// STEP 5: Test it with ages like 10, 13, 17.

console.log(`Can 10 years old watch movie? ${canWatchMovie(10)}`);
console.log(`Can 13 years old watch movie? ${canWatchMovie(13)}`);
console.log(`Can 17 years old watch movie? ${canWatchMovie(17)}`);

// ==============================================
// TASK 3 – DEFAULT PARAMETER (OPTIONAL INPUT)
// ==============================================
//
//  Sometimes you want a “backup value” if the user didn’t pass anything.
//
// STEP 6: Create a function named greet.
//         It takes ONE parameter: name
//         If no name is provided, it should default to "friend"
//
function greet (name = "friend") {
    return console.log(`Hello, ${name}`);
};

greet("MeiMei");
greet();
// STEP 7: Return a string like: "Hello, <name>!"
//
// STEP 8: Test greet() with:
//         - greet("Maya")
//         - greet()   (no argument)
//
// ==============================================
// TASK 4 – ARROW FUNCTION PRACTICE
// ==============================================
//
// STEP 9: Create an arrow function named subtract.
//         It takes two parameters: a and b
//         It returns a - b
//

let subtract = (a,b) => {return a - b};
// STEP 10: console.log subtract with a few tests.
//
console.log(`${subtract(10,4)}`)
// ==============================================
// TASK 5 – CALLBACK MINI (FUNCTION AS AN ARGUMENT)
// ==============================================
//
// STEP 11: Create a function named doMath.
//          It takes THREE parameters:
//          - numberA
//          - numberB
//          - operation (this will be a FUNCTION)

function doMath(numberA,numberB,operation) {
    return operation(numberA,numberB);
};


// STEP 12: Inside doMath:
//          return operation(numberA, numberB)
//
// STEP 13: Call doMath twice:
//          - once with an add operation
//          - once with a multiply operation
//

console.log(doMath(5,13,(x,y)=>{return x+y}));
console.log(doMath(5,13,(x,y)=>{return x*y}));
//  Hint: You can pass arrow functions like:
// (x, y) => x + y
//
// ==============================================
// TASK 6 – “REAL LIFE” MINI: TAX CALCULATOR
// ==============================================
//
// STEP 14: Create a function named addTax.
//          It takes two parameters:
//          - price
//          - taxRatePercent  (example: 16 for 16%)
//
function addTax(price,taxRatePercent) {
    let finalPrice = (price + price*(taxRatePercent/100));
    return (finalPrice*100)%1 === 0 
        ? finalPrice
        : finalPrice-((finalPrice*100)%1)/100
};

console.log(addTax(100,16));
console.log(addTax(59.99,8));
// STEP 15: Convert the taxRatePercent into a decimal rate.
//          Example: 16% becomes 0.16
//
// STEP 16: Return the final price WITH tax included.
//
// STEP 17: Test with console.log:
//          addTax(100, 16)
//          addTax(59.99, 8)
//
