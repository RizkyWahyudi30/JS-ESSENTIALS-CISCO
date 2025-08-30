// ##  4.0.6 The switch … case statement
// The last type of statement that is used for conditional code execution is a switch statement. We’re only talking about it now because, among other things, compared to the if statement, it is not a construction used especially often. It’s somewhat similar to nested if … else statements, but instead of evaluating different expressions, switch evaluates one conditional expression and then tries to match its value to one of the given cases. Here is the syntax of the switch statement:

/**
 *
 * switch (expresision) {
 *      case first_match :
 *         code
 *         break;
 *      case second_match:
 *         code
 *         break;
 *      default:
 *         code
 * }
 *
 */

// To understand it better, run the following code:
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
  case "a":
    alert("Gate A: empty");
    break;
  case "b":
    alert("Gate B: main prize");
    win = true;
    break;
  case "c":
    alert("Gate C: empty");
    break;
  default:
    alert("No gate " + String(gate));
}

if (win) {
  alert("Winner!");
}
