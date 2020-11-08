// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/* Nested function can access the variable internal because they both exist within the myFunction function. Nested Function will first look within the myFunction code to look for the variable internal; it is within the function in this case, so the variable becomes available to nested function. If nested function was outside the myFunction function, it would not have access to the variable internal. */

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let counter = [];
function summation(num){
  counter.push(num);
  let sum = 0;
  sum = counter.reduce((total, numValue) => {return total + numValue});
  return sum;
};

// function summation(num){
//   let counter = 0;
//   while (num) {
//     digit = num % 10;
//     counter += digit;
//     num = (num - digit) / 10;
//   }
//   // return counter;
// };


console.log(summation(4));

// let counter = [1, 2, 3, 4];
// let reduceCounter = counter.reduce((a, b) => { return a + b }, 0);
// console.log(reduceCounter);
