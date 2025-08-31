// ## 4.1.1 What are loops?
// In programming, loops are the second form of flow control statement. Together with conditional execution statements like if and switch, they allow for almost infinite freedom in how the application can work from an algorithmic point of view. While conditional statements are able to change code behavior (allowing us to decide during program execution whether a certain piece of code is to be performed or not), loops are an easy way to repeat any fragment of the code as many times as we want, or until some condition is met. There are a few types of loops in JavaScript, but we can loosely split them into two categories:

//
//
// # While Loop
/**
 *
 * while (condition) {
 *  block of code
 * }
 *
 */
let n = 0;
while (n < 100) {
  n += 10;
  //   console.log(n);
}

// The expression in parentheses is evaluated at the beginning of each iteration of the loop. If the condition is evaluated to true, the code in the curly brackets will be executed. Then execution jumps back to the beginning of the loop, and the condition is evaluated again. The loop will iterate, and the code will be executed as long as the condition is evaluated to true. This means, of course, that with an ill-formed condition, a while loop can turn into an infinite loop, a loop without end. Depending on the context, that may be what we want to achieve. Almost all computer games, for example, are basically infinite loops that are repeating: reading input from the player, updating the game state, rendering on screen as many times per second as necessary. This is a big simplification, but true nonetheless.

// Let's look at one more example.

// This time, the decision whether the loop is to end will be made by the user answering the question asked during each iteration of the loop (we will use the confirm dialog we recently introduced).
let isOver = false;
let counter = 1;

while (isOver != true) {
  let continueLoop = confirm(`[${counter}] Continue the loop?`);
  isOver = continueLoop === true ? false : true;
  counter = counter + 1;
}

// or
let isOver2 = false;
let counter2 = 1;

while (!isOver2) {
  isOver2 = !confirm(`[${counter2++}] Continue the loop?`);
}

//
//
// # do ... while loop
// The do ... while loop is very similar to the plain while loop, the main difference being that in a while loop, the condition is checked before each iteration, and in the do ... whileloop, the condition is checked after each iteration.

// The syntax of the do ... while loop looks as follows:
/**
 *
 * do {
 *  code block
 * } while (condition)
 *
 */

let isOver3;
let counter3 = 1;
do {
  isOver3 = !confirm(`[${counter3++}] Continue the loop?`);
} while (!isOver);

// In the next example, we demonstrate what we said earlier – a do ... while loop always iterates at least once:
let condition = false;

while (condition) {
  console.log("A while loop iteration."); // never executed
}
do {
  console.log("A do ... while loop iteration."); // executed once
} while (condition);

//
//
// # for loop
// The for loop is part of the second type of loops, the one which is better in situations where we know how many times the loop should be executed (although this is not necessary). The syntax of the for loop is a bit more complicated and looks as follows:
/**
 *
 * for (initialization; condition, increment) {
 *  block of code
 * }
 *
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// As shown in the syntax of the for loop, there are three expressions inside the parentheses. The let i = 0 is an initialization, i < 10 is a condition, and i++ is an increment.

// Now let's try to rewrite the same example using the while loop:
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Let's move on to another simple example. Let's assume that we have a four-element array of integers at our disposal and our dream is to sum up all these numbers. There is nothing easier than to go through the array, taking the element one by one and adding them to the result. We just have to remember that before starting the loop, the result is 0.

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
  sum += values[i];
}
console.log(sum); // -> 190
