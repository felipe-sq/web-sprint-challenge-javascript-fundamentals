# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

The .forEach method will execute a function one time for every element in an array. It does not return an new array, therefore, it will need a return on the original array. The .map method is similar, except for the fact that it will create a new array and does not need a return on the original array. 

2. Explain the difference between a callback and a higher order function.

A callback is a function that can be passed into a higher order function as an argument. The purpose of a callback is to have reusable code that can be passed into new/different functions without having to add all the original callback code every time a new function is written. Higher order functions are mainly functions which can take other functions as arguments.

3. What is closure?

Closure is what allows an inner function (function nested within another function) access to it's outer function's scope. This means that an inner function will first search within it's outer functions code for the arguments/parameters that it needs before searching outside of the function. If the arguments/parameters are found within the outer function, then the inner function will accept that code.

4. Describe the four rules of the 'this' keyword.

The four rules of the 'this' keyword are as follows:
a. Global/window binding: this rule means that 'this' is bound to the window or container object. For example, if you type console.log(this) in a browser console, it will return all the code pertaining to JS which is contained in the browser. 

b. Implicit binding: this rule has to do with the Dot operator. It means that 'this' is bound to whatever object/function is to the left of the Dot operator. 

c. Explicit binding: this rule pertains to being able to manually set what 'this' is bound to, using either .apply, .bind or .call. With explicit binding, 'this' can be set to a specific value.

d. New binding: new binding means that when a new object is created using the 'new' keyword, using 'this' will point to the new object being created with said keyword. For example, with function myFunc(age) { this.age = age;}, 'this' points to any new object that is created using myFunc.

5. Why do we need super() in an extended class?

The reason we need super() in an extended class is because super() allows our code to access/inherit and call the functions from the parent class. 

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [X] Create a forked copy of this project
- [X] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [X] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [X] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [X] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**


