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
