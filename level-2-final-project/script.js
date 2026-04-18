const searchButton = document.querySelector(".search-engine");
const searchInput = document.querySelector("#searchInput");
const modeSwitch = document.querySelector(".toggle-switch");
const searchWord = document.querySelector("#search_word");

// listen for the function not to refresh
// searchWord.addEventListener("submit", (event)=> {
//     event.preventDefault();
//     console.log("search form submitted");
//     console.log("User searched for a word", searchInput.value)
// });

searchButton.addEventListener("click", (event)=> {
    event.preventDefault();
    console.log("searched is clicked");
    console.log(searchInput.value);
});

// listen for the keyboard input
// searchInput.addEventListener("keydown",function(event) {
//     if (event.key === "Enter") {
//         console.log("Enter pressed"); 
//         console.log(searchInput.value)
//     }
// })