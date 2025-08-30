// ## 4.0.5 Conditional operator
// We talked about the conditional (ternary) operator in the part of the course dedicated to operators. It allows us to perform one of two actions based on the value of the first operand. Most often it is used as an alternative to the if ... else instruction when you want to assign one of two values to a variable, depending on a certain condition.

// Let's look at a simple example, so far without using a conditional operator:
let price = 100;
let shippingCost;
if (price > 50) {
  shippingCost = 0;
} else {
  shippingCost = 5;
}
console.log(`price: ${price}, shipping: ${shippingCost}`); // price: 100, shipping: 0
// same as you use ternary operator :
let price2 = 100;
let shipping = price > 50 ? 0 : 5;
console.log(`price: ${price2}, shipping: ${shippingCost2}`); // price: 100, shipping: 0

// The conditional operator returns the values of the second or third operand, but if they are complex expressions, it will calculate them first. You can use this fact to place the commands to be executed conditionally as these operands.
let start = confirm("Start?");
start ? alert("Here we go!") : console.log("Aborted");
// or
let start2 = confirm("Start?");
let message = start2 ? "Here we go!" : "Aborted";
alert(message);
