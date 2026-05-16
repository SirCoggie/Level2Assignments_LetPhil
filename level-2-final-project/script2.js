const body = document.body;

const searchInput = document.querySelector("#searchInput");
const searchWord = document.querySelector("#search_word");

const toggleSwitch = document.querySelector(".toggle-switch");
const topRanking =document.querySelector("#topRanking");

const moreInfoBtn = document.querySelector("#moreInfo");
const tabBody = document.querySelector("#tab-body");
const closeBtn = document.querySelector(".close-btn");

const fullRankingList = document.querySelector("#fullRanking");

// for the right side of the tab
const saveBtn = document.querySelector("#saveBtn");
const clearBtn = document.querySelector("#clearBtn");
const shrinkBtn = document.querySelector(".shrink-btn");

const noteDisplay = document.querySelector(".note-display");
const noteInput = document.querySelector(".textarea")
const pNoteBtn = document.querySelector(".pNoteBtn")
const hideNote = document.querySelector(".hide-note")

pNoteBtn.addEventListener("click", () => {
    hideNote.classList.remove("hide-note");
})

shrinkBtn.addEventListener("click", () => {
    hideNote.classList.add("hide-note");
})

// function to display and close model
moreInfoBtn.addEventListener("click", () => {
    tabBody.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    tabBody.classList.remove("active");
})



console.log("clear button found", saveBtn)


// localstorage for the notepad part
const noteMade = localStorage.getItem("noteMade");

if (noteMade) {
    noteDisplay.textContent = noteMade;
    noteInput.value = noteMade;
} else {
    noteDisplay.textContent = "No notes made yet";
}

saveBtn.addEventListener("click", () => {
    const savedNote = noteInput.value;
    localStorage.setItem("noteMade", savedNote);
    noteDisplay.textContent = savedNote;
    if (noteInput === "") {
        noteDisplay.textContent = "Nothing yet";
    }
})

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("noteMade")
    noteInput.value = "";
    noteDisplay.textContent = "No notes saved yet"
})


// load theme function that
// -> pull the localstorage and get the theme and change the theme to mint if the theme is mint else nothing
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log("theme loaded", savedTheme);
    if (savedTheme === "mint") {
        body.classList.add('mint');
    }
}

// toggle theme function that toggle a class in css called mint
// -> set theme in local storage as mint
function toggleTheme() {
    body.classList.toggle('mint');
    const isMint = body.classList.contains('mint');
    localStorage.setItem('theme', isMint ? 'mint' : "")
}

// toggle theme activate only when the click button is made
toggleSwitch.addEventListener('click', toggleTheme);
loadTheme();

// mock data
const mockData = {"search_metadata":{
"id": "69ea846166bc78c0f86a5656"},
"search_parameters":{
    "engine":
"google_trends"},
"interest_by_region":
[
{ "location":"South Korea", "value":"100"}, 
{ "location": "India", "value": "92" },
{ "location": "Japan", "value": "78" },
{ "location": "Italy", "value": "74" },
{ "location": "Germany", "value": "68" },
{ "location": "United Kingdom", "value": "65" },
{ "location": "Canada", "value": "60" },
{ "location": "Brazil", "value": "58" },
{ "location": "Australia", "value": "55" },
{ "location": "France", "value": "52" },
{ "location": "Singapore"," value": "50" }
]
}


function printTopRanking () {
    // this create an inner HTML within topRanking as blank
    topRanking.innerHTML = "";

    // go into mockData.interest_by_region and create a new array containing from 0~4th index (basically 1,2,3,4 and 5th index)
    // and then execute the function for each index to create rank, create element within html file with p tag.
    mockData.interest_by_region.slice(0,4).forEach((item, index) => {
        const rank = index + 1;
        const rankingText = document.createElement("p");
    
        rankingText.classList.add("rank");
        rankingText.textContent = `#${rank} ${item.location}`;
        
        topRanking.appendChild(rankingText)
    });
}

// this create searchWord event have a submit event that will prevent refresh and execute printTopRanking function.
// this has to be edited so that the submit word is inserted into api for the api function to run.
searchWord.addEventListener("submit", (event) => {
event.preventDefault();

printTopRanking();
printFullRanking();
});

// Render full ranking to the full rank
function printFullRanking() {
    fullRankingList.innerHTML = "";

    mockData.interest_by_region.forEach((item, index) => {
        const li = document.createElement("li");

        li.textContent = `#${index + 1} ${item.location}`;

        fullRankingList.appendChild(li);
    })
}