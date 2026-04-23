# 07 — ARRAY METHODS

Welcome to the next level 🚀

In previous units you learned:

- What arrays are
- How to store lists of data
- How to loop through arrays using `for`
- How to read and update values using indexes

Now we unlock something VERY powerful:

⭐ **Array Methods**

These are built-in tools that make working with lists of data much easier and cleaner.

---

# 🧠 1. What are Array Methods?

Array methods are **special functions that belong to arrays**.

They help us:

- Add items
- Remove items
- Loop through items
- Transform data
- Filter data
- Combine data into one result

Instead of writing long loops every time, we can use **shortcuts**.

This makes our code:

✅ Cleaner  
✅ Faster to write  
✅ Easier to understand  
✅ More professional

---

# 📦 2. Core Methods in this Lesson

We focus on **eight core array methods** that every developer must know.

| Method       | Purpose                                    | Simple Example                                   |
| ------------ | ------------------------------------------ | ------------------------------------------------ |
| `.push()`    | Add item to the **end** of the array       | `fruits.push("Mango")`                           |
| `.pop()`     | Remove the **last** item                   | `let last = fruits.pop()`                        |
| `.shift()`   | Remove the **first** item                  | `let first = fruits.shift()`                     |
| `.unshift()` | Add item to the **start**                  | `fruits.unshift("Apple")`                        |
| `.forEach()` | Run code for **each item**                 | `fruits.forEach(f => console.log(f))`            |
| `.map()`     | Create a **new transformed array**         | `let upper = fruits.map(f => f.toUpperCase())`   |
| `.filter()`  | Create a **new filtered array**            | `let long = fruits.filter(f => f.length > 5)`    |
| `.reduce()`  | Combine all items into **one final value** | `let total = nums.reduce((sum,n) => sum + n, 0)` |

---

# 🎴 3. Real-Life Analogy — Row of Cards

Imagine an array is a **row of cards on a table**.

- `.push()` → place a new card on the **right**
- `.pop()` → remove the card on the **right**
- `.unshift()` → place a card on the **left**
- `.shift()` → remove the card on the **left**
- `.forEach()` → look at every card one by one
- `.map()` → create a **new row of cards** that are changed somehow
- `.filter()` → create a **new row** that only keeps certain cards
- `.reduce()` → take all cards and **combine them into one result**
  - Example: count total points from all cards

---

# ⚙️ 4. Why Developers Use Array Methods

Array methods help us:

- Work with API data
- Manage lists of users
- Display products on a page
- Build dashboards
- Handle form data
- Process numbers and totals

They are used **everywhere in real web development.**

---

# 🧪 5. Mini Homework Project

## "Mini Task List Manager"

This is a small console-based project.

You will practice using array methods on a simple task list.

---

## ✅ Step 1 — Create the Array

Create an array called `tasks`.

It should start with 3 strings such as:

- "Study JavaScript"
- "Drink water"
- "Go for a walk"

---

## ✅ Step 2 — Add a New Task

Use `.push()` to add a new task to the **end** of the array.

---

## ✅ Step 3 — Add a Priority Task

Use `.unshift()` to add a task at the **beginning**.

This represents a high-priority task.

---

## ✅ Step 4 — Remove the Last Task

Use `.pop()`.

Store the removed task in a variable and log:

```
Removed task: ______
```

---

## ✅ Step 5 — Loop Through Tasks

Use `.forEach()`.

Log each task with a number like:

```
1. Study JavaScript
2. Drink water
3. Go for a walk
```

---

## ✅ Step 6 — Filter Long Tasks

Create a new array called `longTasks`.

Use `.filter()` to keep only tasks whose length is greater than **15 characters**.

Log the result.

---

## ✅ Step 7 — Transform Tasks

Create a new array called `upperTasks`.

Use `.map()` to convert every task into **uppercase**.

Log the new array.

---

## ✅ Step 8 — Combine Tasks with Reduce

Create a variable called `totalCharacters`.

Use `.reduce()` to calculate:

👉 the **total number of characters** across all tasks.

Log the final result.

This teaches how to:

⭐ summarize data  
⭐ calculate totals  
⭐ combine many values into one

---

# 🎯 Learning Outcome

After this lesson you should understand:

- How to add and remove items from arrays
- How to loop through arrays using modern methods
- How to create new transformed arrays
- How to filter data based on conditions
- How to combine data into one final result
- Why array methods are essential in real projects

You are now thinking more like a **real JavaScript developer.** 🚀
