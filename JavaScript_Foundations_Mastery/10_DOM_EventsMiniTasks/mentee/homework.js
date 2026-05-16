// 09 – DOM + EVENTS MINI TASKS
// ----------------------------------------------

// After writing your code, open index.html in the browser and
// interact with the page (click buttons, type in the input).
//
// ==============================================
// TASK 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables:
//         - The main card (id "eventCard")
//         - The title (id "cardTitle")
//         - The description (id "cardDescription")
//         - The "Change Title" button (id "changeTitleBtn")
//         - The "Toggle Highlight" button (id "toggleHighlightBtn")
//         - The counter span (id "counterValue")
//         - The "+1" button (id "incrementBtn")
//         - The text input (id "previewInput")
//         - The preview span (id "previewText")
//

// main Card
const eventCard = document.getElementById("eventCard"); 
// title
const cardTitle = document.getElementById("cardTitle");
// description
const cardDescription = document.getElementById("cardDescription");

// buttons
const changeTitleBtn = document.getElementById("changeTitleBtn");
const toggleHighlightBtn = document.getElementById("toggleHighlightBtn");
// +1 button
const incrementBtn = document.getElementById("incrementBtn");

// counter Value(span)
const counterValue = document.getElementById("counterValue");

// text input+ text preview
const previewInput = document.getElementById("previewInput");
const previewText = document.getElementById("previewText");

// STEP 2: (Optional) console.log some of these variables to make
//         sure you selected them correctly.


changeTitleBtn.addEventListener("click", () => {
    console.log("changeTitleButton has been pressed!");
});

toggleHighlightBtn.addEventListener("click", () => {
    console.log("toggleHighlight button has been pressed");
});

incrementBtn.addEventListener("click", () => {
    console.log("incrementBtn has been pressed!");
});

previewInput.addEventListener("input", () => {
    console.log("typing!");
});

// ==============================================
// TASK 2 – CLICK EVENT: CHANGE TITLE TEXT
// ==============================================
//
// STEP 3: Add a "click" event listener to the "Change Title" button.
//         Inside the event listener function:
//         - Change the textContent of the title to something new,
//           for example "Wave 7 – Events in Action".
//         - (Optional) Also update the description to mention that
//           the title was changed by clicking the button.

let clickCount = 0;

changeTitleBtn.addEventListener("click", () => {
    clickCount++;

if (clickCount === 1) {
    cardTitle.textContent = "Hmmmm hmmm I can't decide on the title"
    cardDescription.textContent = "You pressed the button! You found out I have no creativity in deciding on title name! Congrats itchy fingers!"
}


// i was bored
// else if (clickCount === 3)  {
//     cardTitle.textContent = "Stop Pressing!";
//     cardDescription.textContent = "I'm warning you as a friendly remidner";
// }

// else if (clickCount === 5) {
//     cardTitle.textContent = "You are going to regret if you keep pressing!";
//     cardDescription.textContent = "Its for your own mental good! Stop pressing";
// }

// else if (clickCount >= 10) {
//     cardTitle.textContent = "ERROR!";
//     cardDescription.textContent = "I have analyzed you have a problem! Go see a therapist!";
// }

});


// ==============================================
// TASK 3 – CLICK EVENT: TOGGLE HIGHLIGHT CLASS
// ==============================================
//
// STEP 4: Add a "click" event listener to the "Toggle Highlight" button.
//         Inside the event listener function:
//         - Use classList.toggle("event-card-highlight") on the main card.
//           This should add/remove the highlight effect each time you click.

toggleHighlightBtn.addEventListener("click", () => {
    eventCard.classList.toggle("event-card-highlight");
});

// ==============================================
// TASK 4 – CLICK EVENT: COUNTER +1
// ==============================================
//
// STEP 5: Create a variable (for example, counterValue) and set it
//         equal to the starting value of the counter (0).
//
// STEP 6: Add a "click" event listener to the "+1" button.
//         Inside the event listener function:
//         - Increase the counter variable by 1.
//         - Update the textContent of the counter span in the page
//           so it always shows the current count.
let counterValueNumber = 0 

incrementBtn.addEventListener("click", () => {
    counterValueNumber ++;
    counterValue.textContent = counterValueNumber;
});
// ==============================================
// TASK 5 – INPUT EVENT: LIVE PREVIEW
// ==============================================
//
// STEP 7: Add an "input" event listener to the text input.
//
// STEP 8: Inside the event listener function:
//         - Read the current value from the input (using .value).
//         - If the value is an empty string, set the preview text
//           to "Nothing typed yet.".
//         - Otherwise, set the preview text to exactly what the user typed.


previewInput.addEventListener("input", () => {
    const TypeInput = previewInput.value
    if (TypeInput === "") {
        previewText = "Nothing typed yet.";
    } else {
    previewText.textContent = TypeInput;
    }
});