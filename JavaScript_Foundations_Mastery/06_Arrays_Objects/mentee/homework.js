// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.
let contact1 = {name: "James", phone: "+65-010-8992-9902", isFavorite: false};
let contact2 = {name: "Perry", phone: "+65-011-9564-2364", isFavorite: true};

let contacts = [contact1, contact2];
// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)


// STEP 3: Log the total number of contacts.
console.log(contacts.length);
// STEP 4: Log the name of the first contact.
console.log(contacts[0].name);
// STEP 5: Update one contact’s isFavorite value.
contact2.isFavorite = false;
// STEP 6: Add (push) a new contact object.
contacts.push({name: "Henry", phone: "+65-110-1241-8723", isFavorite: true});

// STEP 7: Log the updated contacts array.
console.log(contacts);
