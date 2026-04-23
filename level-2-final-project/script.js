const body = document.body;

const searchButton = document.querySelector(".search-engine");
const searchInput = document.querySelector("#searchInput");
const searchWord = document.querySelector("#search_word");

const toggleSwitch = document.querySelector(".toggle-switch");

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log("theme loaded", savedTheme);
    if (savedTheme === "mint") {
        body.classList.add('mint');
    }
}

function toggleTheme() {
    body.classList.toggle('mint');
    const isMint = body.classList.contains('mint');
    localStorage.setItem('theme', isMint ? 'mint' : "")
}

toggleSwitch.addEventListener('click', toggleTheme);
loadTheme();

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