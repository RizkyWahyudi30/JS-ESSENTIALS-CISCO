// Exercise 1: Write a script that will ask the user to input a number.
// Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.
let message = prompt("Enter a random number:");
if (message > 90 && message < 110) {
  alert("Bingo!");
} else {
  alert("Miss");
}

// Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.
let message2 = prompt("Enter a random number:");
let statement = message2 > 90 && message2 < 110 ? "Bingo!" : "Miss";
alert(statement);

// Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.

// Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
let firstNum = Number(prompt("Enter first number: ", 0));
let secondNum = Number(prompt("Enter second number: ", 0));
let operand = prompt("Enter a operand (+, -, *, /, **): ");
let result;

if (!Number.isNaN(firstNum) && !Number.isNaN(secondNum)) {
  switch (operand) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      result = "Error: unknown operand";
  }
} else {
  result = "Error: at least one of the entered values is not a number";
}
alert(result);
