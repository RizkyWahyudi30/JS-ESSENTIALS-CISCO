//  5.1.1 Parameters validation
// Remember how we said that we sometimes use the return keyword to interrupt functions in the case of errors? A good example is the validation of function parameters.

// Let's go back to the example with the getMeanTemp function. The last version we wrote needs an array of numbers as an argument. Before starting the calculation, we can check if the value passed to it is actually an array.
function getMeanTemp(temperatures) {
  if (!(temperatures instanceof Array)) {
    return NaN;
  }
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}
console.log(getMeanTemp(10)); // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20

//
//  5.1.2 Recursion
// During your math lessons, you probably came across the concept of factorials. A factorial is a function, indicated by an exclamation mark in mathematical notation. We pass an integer to this function and its result is obtained by multiplying all integers from the number 1 to the number given as an argument. Formally, you define a factorial as follows:
/**
 *
 * n!=n∙(n-1)∙(n-2)∙... ∙2∙1
 *
 * So, for example, the factorial of 6 is:
 * 6!=6∙5∙4∙3 ∙2∙1=720
 *
 */
// Let's try to write a function that will calculate the factorial from the given number.

// It will take the parameter n and return the calculated value.
function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}
console.log(factorial(6)); // -> 720
// In this case, we use the iterative approach to calculate the factorial, in other words, we use a loop in which, during each iteration we multiply the previous result by another element of the sequence.

// After the first iteration, the result is 6, after the second, 30, after the third, 120, and so on. The iterations are repeated to the last significant element of the sequence, that is, to the value 2 (hence the condition of ending the loop n > 1).

// However, the definition of a factorial can be written in a slightly different way. It will be the factorial of the previous element n - 1 multiplied by n.

// For example, 6! is 5! multiplied by 6. Such a factorial definition uses the recursion, i.e. referring a function to itself (but with a different argument). A recursion is a mechanism that allows to simplify the formal notation of many mathematical functions and present them in an elegant form. We can also successfully use recursion in programming.

// Let's declare the factorial function again, this time using recursion.
function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(6)); // -> 720

//
//  5.1.3 Functions as first-class members
// In JavaScript, functions are first-class members. This term means that functions can be treated as any data, which can be stored in variables or passed as arguments to other functions. For example, we can declare the showMessage function and then store it in the variable sm.
function showMessage(message) {
  console.log(`Message: ${message}`);
}
let sm = showMessage;

// We can store any function that is accessible in this scope in a variable and use a function call operator () to execute it. We can check that the sm variable is now a function by using the typeof operator.
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function

// But it’s important to remember that when assigning a function to a variable, we don't use a function call operator, as this would execute the function and assign the result of the function to a variable, and not to the function itself.
function doNothing() {
  return undefined;
}
let a = doNothing(); // assign result of function call
let b = doNothing; // assign a function
console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

// In the example, the result of the doNothing function call (i.e. the undefined value returned by the function) is stored in the a variable, while the doNothing function itself is stored in the b variable (or more precisely, a reference to the function is stored in the b variable).

// This property is especially useful when passing the function as a call parameter to other functions, which we will soon learn more about. For now, let's test that something like this is actually feasible.
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function operation(func, first, second) {
  return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200
// The operation function takes as its first argument the function (parameter func) and calls it with the other two arguments passed (parameters first and second).

//
//  5.1.4 Function expressions
// To store a function in a variable or pass it as an argument to call a function, you do not necessarily have to declare it previously and use its name.

// Let's go back to our example with the add function:
function add(a, b) {
  return a + b;
}
let myAdd = add;
console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

// We first declare the add function, and then store it in the variable myAdd. We can call the same function using both the name add and the variable myAdd. We can shorten this notation and declare the function by storing it in a variable.
let myAdd1 = function add(a, b) {
  return a + b;
};
console.log(myAdd1(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30
// In the example, we again declare the add function, and at the same time store it in the myAdd variable.

// This form of defining a function is called function expression. In this case, it is specifically a named function expression, because the function has a name (add). If there is a named function expression, there will probably also be an unnamed, or precisely, an anonymous function expression. In fact, simply remove the name following the function keyword to change the function from named to anonymous.
let myAdd2 = function (a, b) {
  return a + b;
};
console.log(myAdd2(10, 20)); // -> 30

// Let's go back to the concept of anonymous functions. It may seem a little incomprehensible when you use a name (although it is a variable name) to refer to a function. In this case, it's about anonymity, i.e. the lack of a name, in the very definition of a function. This will be much more evident when passing a function as a call parameter to another function.

// Let's look at the example:
function operation(func, first, second) {
  return func(first, second);
}
let myAdd3 = function (a, b) {
  return a + b;
};
console.log(operation(myAdd3, 10, 20)); // -> 30
console.log(
  operation(
    function (a, b) {
      return a * b;
    },
    10,
    20
  )
); // -> 200

//
//  5.1.5 Callbacks
// Functions that are passed as arguments to other functions may seem quite exotic and not very helpful, but in fact, they are a very important part of programming. So important that they even get their own name. They are callback functions. As we have seen in previous examples, a function that receives a callback as an argument can call it at any time. Importantly, in our examples, the callback is run synchronously, that is, it is executed in a strictly defined order resulting from where it is placed among the other instructions.

// # Synchronous callbacks

// Synchronous execution is the most natural way to see how the program works. Subsequent instructions are executed in the order in which they are placed in the code. If you call a function, the instructions in it will be executed at the time of the call. If we pass another function to this function as an argument, and we call it inside an outer function as well, then all instructions will keep their natural order.
let inner = function () {
  console.log("inner 1");
};
let outer = function (callback) {
  console.log("outer 1");
  callback();
  console.log("outer 2");
};
console.log("test 1");
outer(inner);
console.log("test 2");

//
//  5.1.6 Asynchronous callbacks
// Asynchronous operation of programs is a rather complex topic, strongly dependent on a particular programming language, and often also on the environment.

// In the case of client-side JavaScript running in a browser, it is limited to event-based programming, i.e. the asynchronous response to certain events. An event can be a signal sent by a timer, a user action (e.g. pressing a key or clicking on a selected interface element), or information about receiving data from the server.

// Using appropriate functions, we combine a specific type of event with a selected callback function, which will be called when the event occurs.

// One of the simplest cases when there is an asynchronous execution of instructions is the use of the setTimeout function. This function takes another function (a callback) and the time expressed in milliseconds as arguments. The callback function is executed after the specified time, and meanwhile, the next program instruction (placed in the code after setTimeout) will be executed.

// Thus, the moment the callback function is called is not determined by its order, but by an arbitrarily imposed delay. The delay only applies to the callback function given to setTimeout, while the rest of the code is still executed synchronously.

// Let's modify the previous example a bit. In the outer function, we do not call callback() immediately, but pass it to setTimeout, which executes it with a delay of 1000 milliseconds (one second).
let inner2 = function () {
  console.log("inner 1");
};
let outer2 = function (callback) {
  console.log("outer 1");
  setTimeout(callback, 1000) /*ms*/;
  console.log("outer 2");
};
console.log("test 1");
outer2(inner2);
console.log("test 2");

//  5.1.7 setTimeout and setInterval functions
// The setTimeout function is used when you want to cause a delayed action. A similar function is setInterval. This time, the action is also performed with a delay, but periodically, so it is repeated at fixed intervals. In the meantime, the main program is executed, and at every specified time, the callback given as an argument for a setInterval call is called.

// Interestingly, the setInterval function returns an identifier during the call, which can be used to remove the timer used in it (and consequently to stop the cyclical callback function call). We will do this in the next example. First, we run setInterval, which will call the callback function (i.e. the inner function) in one-second intervals. Then we call setTimeout, which will turn off the timer associated with the previously called setInterval after 5.5 seconds. As a result, the inner function should be called five times. In the meantime, the rest of the program will be executed ...
let inner3 = function () {
  console.log("inner 1");
};
let outer3 = function (callback) {
  console.log("outer 1");
  let timerId = setInterval(callback, 1000); /*ms*/
  console.log("outer 2");
  setTimeout(function () {
    clearInterval(timerId);
  }, 5500);
};
console.log("test 1");
outer3(inner3);
console.log("test 2");

//
//  5.1.8 Arrow functions
// An arrow function is a shorter form of a function expression. An arrow function expression is composed of: parentheses containing zero to multiple parameters (if exactly one parameter is present, the parentheses can be omitted); an arrow that looks like this "=>"; and the body of the function, which can be surrounded by curly brackets if the body is longer. If an arrow function has only one statement and returns its value, we can omit the return keyword, as it will be implicitly added.

let add = function (a, b) {
  return a + b;
};
console.log(add(10, 20)); // -> 30

// can be written as follows:
let add = (a, b) => {
  return a + b;
};
console.log(add(10, 20)); // -> 30

// or simplified even more (the function has only one statement, whose value returns):
let add = (a, b) => a + b;
console.log(add(10, 20)); // -> 30

// If the arrow function takes exactly one parameter, the parentheses may be omitted. Let's go back to the examples with the recursive factorial function, which takes exactly one parameter, n. In the previous example, we declared it using the function statement:
function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // -> 120
