//  4.0.1 Conditional statements
// Conditional execution, or control flow statements, have been mentioned a few times already, and now it’s time to examine them in detail. This is a very important topic, as control flow statements are essential not only to JavaScript, but to programming in general. Without the ability to react and change its behavior, any code would always do the same thing. Of course, this is sometimes exactly what we need, but most of the time we need responsiveness and the ability to handle different situations in the code.

// #  4.0.2 The if statement
/**
 *
 * if (conditional) {
 *  block of code
 * }
 *
 */

let isUserReady = confirm("Are your ready?");
if (isUserReady) {
  console.log(isUserReady);
  alert("User ready");
}

// e talked about code blocks, and more specifically, their scope, in the section devoted to variables. If you don't remember this topic, it would be good for you to return to it for a while. As a quick reminder – we use program blocks whenever, for some reason, we want to separate a piece of code to form a logical whole. Conditional instructions are a good example. Using the if instruction and closing the selected instructions in the block (using curly brackets), we can cause them to be executed only when certain circumstances occur (i.e. the condition we’ve invented is fulfilled). Remember that variables and constants declared using let and const inside a block are local, that is, their scope is limited to that particular block. Also make sure to use indentations in the blocks to make the code more readable. In other words, move the instructions in them to the right.
let unitPrice = 10;
let pieces = prompt("How many pieces do your order?: ", 0);
if (pieces > 0) {
  let total = unitPrice * pieces;
  console.log(total);
}
console.log(total);

// This is a good moment to remind you of logical and comparison operations, as they’re most commonly used as conditions, especially in more complex situations. Let's take a look at the example:
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
if (userAge > 21) {
  if (cartValue >= 300 || points >= 500) {
    shippingCost = 0;
  }
}
console.log(shippingCost);
//In this example, to set the shippingCost to zero, the userAge needs to be over 21. The second if is calculated and needs the cartValue to be over or equal to 300, or the points to be greater than or equal to 500.
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
  shippingCost = 0;
}

//
//
//
// #  4.0.3 The if ... else statement
// The if statement is very handy indeed, but what if we also want to execute some code when a given condition is not met? We could of course just use another if statement and change the condition, as shown in the example:
/**
 *
 * if (condition) {
 *  condition - true code
 * } else {
 *  condition - false code
 * }
 *
 */
// Using the new syntax, we can rewrite our previous example:
let isReady = confirm("Are you ready?");
if (isReady) {
  console.log("User is Ready!");
} else {
  console.log("Use isnt Ready!");
}

//
//
//
// #  4.0.4 The if … else … if statement
// Both if and if … else statements give us great flexibility in how code can behave in relation to anything else. But branching the code execution flow only to two branches is sometimes not enough. There’s a simple solution to this in JavaScript – we can nest if ... else statements. How does this work? An else segment can have an if or if … else statement inside it, and it’s possible to nest any number of if … else statements in this way if needed.

/**
 *
 * if (condition_1) {
 *  code
 * } else if (condition_2) {
 *  code
 * } else if (condition_3) {
 *  code
 * } else {
 *  code
 * }
 *
 */
// Let's look at a simple example where we use such a "multi-level" if:

let number = prompt("Enter a number", 0);

if (number < 10) {
  alert("<10");
} else if (number < 30) {
  alert("<30");
} else if (number < 60) {
  alert("<60");
} else if (number < 90) {
  alert("<90");
} else if (number < 100) {
  alert("<100");
} else if (number == 100) {
  alert("100");
} else {
  alert(">100");
}
