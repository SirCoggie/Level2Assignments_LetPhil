// 07 – ARRAY METHODS
// ==============================================
// TASK 1 – BASIC PUSH / POP / SHIFT / UNSHIFT
// ==============================================

// STEP 1: Create an array called fruits with at least 3 fruit names.

// STEP 2: Log the original fruits array.

// STEP 3: Use .push() to add a new fruit to the end.
//         Then log the array again.

// STEP 4: Use .unshift() to add a fruit to the beginning.
//         Then log the array again.

// STEP 5: Use .pop() to remove the last fruit.
//         Save the removed fruit in a variable and log it.

// STEP 6: Use .shift() to remove the first fruit.
//         Save the removed fruit in a variable and log it.

// STEP 7: Log the final state of the fruits array.

const fruits = ["Dragon Fruit", "Star Fruit", "Grapes"];
console.log("Original Array", fruits);

fruits.push("Mango");
console.log("After Push", fruits);

fruits.unshift("Kiwi");
console.log("After unShift", fruits);

let removed = fruits.pop();
console.log(removed);

let removedFF = fruits.shift();
console.log(removedFF);

console.log("Final Fruit Array", fruits);

// ==============================================
// TASK 2 – FOREACH: SAY HELLO TO EACH ITEM
// ==============================================

// STEP 8: Create an array called mentees with 3 names.

// STEP 9: Use .forEach() to log a message for each mentee, for example:
//         "Hello, (name)! Ready to code?"

const mentees = ["Ryan", "Sung Jin", "Jorge"];
mentees.forEach((mentee) => {
  console.log(`Hello, ${mentee}! Ready to code?`);
});

const countries = ["Canada", "Korea", "America"];
countries.forEach((country) => {
  console.log(`Hello! I am from ${country}!`);
});

// ==============================================
// TASK 3 – MAP: TRANSFORM VALUES
// ==============================================

// STEP 10: Create an array called numbers with some numbers, for example:
//          [2, 4, 6, 8].

// STEP 11: Use .map() to create a new array called doubledNumbers
//          where each number is multiplied by 2.

// STEP 12: Log both arrays:
//          - original numbers
//          - doubledNumbers

// STEP 13: Use .map() again to create a new array called labeledNumbers
//          where each item is a string like "Value: X".

// STEP 14: Log labeledNumbers.

const numbers = [2, 4, 6, 8];
const doubledNumbers = numbers.map((number) => number * 2);

console.log("Original Array", numbers);
console.log("Doubled Numebers Array", doubledNumbers);

const labeledNumbers = numbers.map((number) => `Value: ${number}`);
console.log("Labeled Numbers:", labeledNumbers);

// ==============================================
// TASK 4 – FILTER: KEEP ONLY SOME VALUES
// ==============================================

// STEP 15: Create an array called mixedNumbers with numbers, for example:
//          [3, 10, 7, 20, 15, 2].

// STEP 16: Use .filter() to create a new array called bigNumbers
//          that only keeps numbers greater than or equal to 10.

// STEP 17: Log bigNumbers.

// STEP 18: Use .filter() again to create a new array called evenNumbers
//          that only keeps numbers that are even (number % 2 === 0).

// STEP 19: Log evenNumbers.

const mixedNumbers = [3, 10, 7, 20, 15, 2];

const bigNumbers = mixedNumbers.filter((greater) => greater >= 10);
console.log("BigNumbers:", bigNumbers);

const evenNumbers = mixedNumbers.filter((even) => even % 2 === 0);
console.log("Even Numbers", evenNumbers);

// ==============================================
// TASK 5 – REDUCE: COMBINE VALUES INTO ONE RESULT
// ==============================================

// STEP 20: Create an array called prices with some numbers, for example:
//          [5, 10, 15, 20].

// STEP 21: Use .reduce() to calculate the total price.
//          Create a variable called totalPrice.
//          The reduce logic should:
//          - start from 0
//          - add each price to the running total.

// STEP 22: Log totalPrice.

// STEP 23: Use .reduce() again to find the largest number
//          in the prices array.
//          Create a variable called maxPrice.

// STEP 24: Log maxPrice.

const prices = [5, 10, 15, 20];

const totalPrice = prices.reduce((total, price) => {
  return total + price;
}, 0);

console.log("Total Price:", totalPrice);

const maxPrice = prices.reduce((largest, price) => {
  return price > largest ? price : largest;
}, prices[0]);

// largest = prices[0]

// const prices = [5, 10, 15, 20];

// larges = 5

// 10> 5  yes - 10
// 15 > 10 yes  - 15
// 20 > 15 yes - 20

// name.reduce((accumulator, currentItem)=>{
//     return updatedValue;
// }, startValue)
