// DATA TYPES HOMEWORK – DAILY STATS
// -------------------------------------------------
// GOAL: Create a "daily stats summary" using different data types
//       and print it in the console.

// STEP 1: Create a variable called dayName (string)
//         with the name of the day, for example "Monday".
let dayName = "Monday";
// STEP 2: Create a variable called stepsWalked (number)
//         with how many steps you took today (make up a number if needed).
let stepWalked = 8000;
// STEP 3: Create a variable called waterCups (number)
//         with how many cups of water you drank.
let waterCups = 30;
// STEP 4: Create a variable called didWorkout (boolean)
//         with true or false, depending on if you worked out today.
let didWorkout = true;
// STEP 5: Create a variable called eveningPlan and set it to null
//         to mean "no plan yet".
let eveningPlan = null;
// STEP 6: Create a variable called favoriteSnack but DO NOT assign a value yet,
//         so it stays undefined for now.
let favoriteSnake = undefined;
// STEP 7: Use console.log to print a clear summary, for example:
//         --- DAILY STATS ---
//         Day: (dayName)
//         Steps walked: (stepsWalked)
//         Water cups: (waterCups)
//         Worked out today? (didWorkout)
//         Evening plan: (eveningPlan)
//         Favorite snack: (favoriteSnack)
console.log(
`--- DAILY STATS ---
Day: ${dayName}
Steps walked: ${stepWalked}
Water cups: ${waterCups}
Worked out today? ${didWorkout}
Evening plan: ${eveningPlan}
Favorite snack: ${favoriteSnake}`
);
// STEP 8: Now update eveningPlan to a string with a specific plan,
//         for example "Movie night" or "Reading time".
eveningPlan = "Dancing Time!";
// STEP 9: Assign a string value to favoriteSnack, for example "Popcorn".
favoriteSnake = "Oreo";
// STEP 10: Use console.log again to print an UPDATED summary
//          that shows the new values for eveningPlan and favoriteSnack.
console.log(
`--- DAILY STATS ---
Day: ${dayName}
Steps walked: ${stepWalked}
Water cups: ${waterCups}
Worked out today? ${didWorkout}
Evening plan: ${eveningPlan}
Favorite snack: ${favoriteSnake}`
);