// ARRAY METHODS HOMEWORK – MINI TASK LIST
// ------------------------------------------------------
// GOAL: Manage a small task list using array methods and log changes
//       to the console.

// STEP 1: Create an array called tasks that starts with 3 task strings.
//         Example:
//         "Study JavaScript", "Drink water", "Go for a walk"
let tasks = ["Study Javascript", "Drink Water", "Go for a walk"];
// STEP 2: Use console.log to show the initial tasks array.
console.log(tasks);
// STEP 3: Use .push() to add a new task to the end,
//         then log the tasks array again.
tasks.push("Clean house");
console.log(tasks);
// STEP 4: Use .unshift() to add a "priority" task at the beginning,
//         then log the tasks array again.
tasks.unshift("Watching tutorial video");
console.log(tasks);
// STEP 5: Use .pop() to remove the last task.
//         Save the removed task in a variable called removedTask.
//         Log a message that shows which task was removed.
let removedTask = tasks.pop();
console.log(`Task removed: ${removedTask}`);
// STEP 6: Use .forEach() to log each remaining task with a number,
//         for example:
//         "1. Study JavaScript"
//         "2. Drink water"
//         etc.
tasks.forEach((task,index) => {
    console.log(`${index+1}. ${task}`)
});

// STEP 7: Use .filter() to create a new array called longTasks
//         that only keeps tasks with a length greater than 15 characters.
//         (task.length > 15)
const longTasks = tasks.filter((task)=>task.length > 15);
console.log(longTasks);
// STEP 8: Log longTasks to see which tasks were kept.

// STEP 9: Use .map() to create a new array called upperTasks.
//         Convert every task into uppercase text.
//         Then log upperTasks.
let upperTasks = tasks.map(task => task.toUpperCase());
console.log(upperTasks);
// STEP 10: Use .reduce() to calculate the TOTAL number of characters
//          across all tasks.

//          Create a variable called totalCharacters.

//          The reduce logic should:
//          - start from 0
//          - add each task.length to the running total

//          Finally log:
//          "Total characters across all tasks: ___"
const totalCharacters = tasks.reduce((Sum, task) =>
Sum + task.length,0);

console.log(`Total characters across all tasks: ${totalCharacters}`)