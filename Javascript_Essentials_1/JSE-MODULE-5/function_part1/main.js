//  5.0.1 Functions
// Let's take a look at a simple program, written without any functions.
let temperatures;
let sum;
let meanTemp;
temperatures = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
  sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
temperatures = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
  sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

//
//  5.0.2 Declaring functions
// As with variables, functions need to be declared before we can use them. The syntax for function declaration looks like this:
/**
 *
 * function functionName() {
 *      code
 * }
 *
 */
let temperatures2;
let sum2;
let meanTemp2;
function getMeanTemp() {
  sum2 = 0;
  for (let i = 0; i < temperatures2.length; i++) {
    sum += temperatures2[i];
  }
  meanTemp2 = sum2 / temperatures2.length;
}

temperatures2 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
getMeanTemp();
console.log(`mean: ${meanTemp2}`); // -> mean: 16.666666666666668
temperatures = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
getMeanTemp();
console.log(`mean: ${meanTemp2}`); // -> mean: 18.083333333333332

//
/// Usually, functions are declared before they are called, mostly at the beginning of the code. However, this is only a good practice, which increases the readability of the code, not a JavaScript syntax requirement. Function declarations are automatically moved to the top of the scope, so we can use them before the declaration, as long as they are in the scope.
let name = Alice;
function showName() {
  console.log(name);
}
showName(); // -> Alice

//
//  5.0.4 Functions – local variables
// Let's try to make a small change to our program calculating the mean temperature.

// Variables declared with the let keyword are local inside the code block (i.e. inside the range limited by curly brackets), while variables declared with the var keyword are local inside the function block. So if you declare a variable inside a function block, whether using let or var, it will only be visible (and usable) inside the function block. This is very useful, because usually the variables you use inside a function are not needed outside of it.
let temperatures3;
let meanTemp3;
function getMeanTemp() {
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  meanTemp = sum / temperatures.length;
}
temperatures3 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
getMeanTemp();
console.log(`mean: ${meanTemp3}`); // -> mean: 16.666666666666668
temperatures3 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
getMeanTemp();
console.log(`mean: ${meanTemp3}`); // -> mean: 18.083333333333332
//Although we have declared it outside the getMeanTemp function (it is a global variable), we only refer to it inside the function. A global declaration is therefore unnecessary.

// Let's put it in order, declaring sum locally.

//
//  5.0.5 The return statement
// Functions that have been called execute a sequence of instructions contained in their body. The result of this execution may be a certain value that we may want to store in some variable. The return keyword comes to help us in this case. What exactly is return for?

// Let's move away for a moment from our example with mean temperature calculation and play with a slightly simpler code. The showMsg function contains only two console.logs separated by return.
function showMsg() {
  console.log("message 1");
  return;
  console.log("message 2");
}
showMsg(); // -> message 1

// As expected, the call ends up displaying only the first message "message 1", then the return interrupts the function. In practice, using return here would not make much sense. It causes the console.log("message 2") to never be called. So it would be easier not to write a second console.log call at all.

// In the example, we declare a simple getTrue function, which always returns true. Pay attention to the function call – we store the result of this call in the test variable. As you can guess, this variable will have the true value.
function getTrue() {
  return true;
}
let test = getTrue();
console.log(test); // -> true

let temperatures4;
let meanTemp4;
function getMeanTemp() {
  let sum4 = 0;
  let result4;
  for (let i = 0; i < temperatures4.length; i++) {
    sum4 += temperatures4[i];
  }
  result4 = sum4 / temperatures4.length;
  return result4;
}
temperatures4 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
meanTemp4 = getMeanTemp();
console.log(`mean: ${meanTemp4}`);
temperatures4 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
meanTemp4 = getMeanTemp();
console.log(`mean: ${meanTemp4}`);
// The result variable is actually only used to temporarily store the value to be returned. So we can simplify the function code even more. We will skip the result variable by placing the appropriate operation directly after return.

// function getMeanTemp() {
//   let sum = 0;
//   for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i];
//   }
//   return sum / temperatures.length;
// }

// The meanTemp variable has also become slightly redundant. We store the result of the function call in it, which is then displayed on the console. This can also be simplified by placing the getMeanTemp function call directly in console.log (without the use of the meanTemp variable).

// let temperatures;
// function getMeanTemp() {
//   let sum = 0;
//   for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i];
//   }
//   return sum / temperatures.length;
// }
// temperatures = [
//   12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
//   20, 19, 17, 16,
// ];
// console.log(`mean: ${getMeanTemp()}`);
// temperatures = [
//   17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
//   21, 19, 18, 17, 16,
// ];
// console.log(`mean: ${getMeanTemp()}`);

// Our getMeanTemp is slowly beginning to look like a normal function. It is a logically independent piece of code, it returns a calculated value, and it operates on local variables. There is one small problem left to solve. We count the mean using the data contained in the global variable temperatures. And the function should be independent of what is happening outside it. At the same time, it should allow us to calculate the mean value for different data. How do we reconcile these two conflicting demands?

//
//
//  5.0.6 Parameters
// In JavaScript, a function’s parameters appear in its declaration. These are names separated by commas, placed in parentheses after the function name. Each parameter inside a function will be treated as a local variable. A function whose definition specifies the parameters must be invoked in an appropriate way. When such a function is called, the values (literals, variables, function calls) should be placed in parentheses after its name, and are treated as parameters inside the function. The values given during a call are called arguments. Arguments, if there is more than one, are separated by commas and must be passed in the same order as the parameters we define in the function declaration.

// Let's look at a simple function that adds two values. We will call it add.
function add(first, second) {
  return first + second;
}

let result = add(5, 7);
console.log(result); // -> 12
// In the example call, we pass the arguments 5 and 7 to the function. Thus, during the function operation, the first parameter has a value of 5 and the second parameter has a value of 7. The function returns the value 12 to the result variable.

// You can pass any type of data as arguments to the function, both simple and complex. Let's write the getElement function, which will return the selected element from the array, with the array and index of the element being the function's parameters.
function getElement(elements, index) {
  return elements[index];
}

let names = ["Alice", "Bob", "Eve", "John"];
let namee = getElement(names, 2);
console.log(namee); // -> Eve

// Let's go back to the example with mean temperature. The getMeanTemp function will take one parameter – temperatures. At the same time, we will remove the global variable with this name from the program and create two others, day1 and day2, which will contain the measurement data. These data will be passed on to the function.
function getMeanTempp(temperatures) {
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}
let day1 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
console.log(`mean: ${getMeanTempp(day1)}`); // -> mean:
16.666666666666668;
let day2 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
console.log(`mean: ${getMeanTempp(day2)}`); // -> mean:
18.083333333333332;

//
//
//  5.0.7 Shadowing
// As we mentioned earlier, the parameters are treated inside the function as local variables. And just like the local variables explicitly declared inside a function, they shadow the global variables of the same name (or more generally, variables from the outer scope). Let's go back for a moment to the example with adding numbers. The add function has two parameters: first and second. At the same time, we will declare, out of the function, global variables named first, second, third, and fourth.

// If inside the function, we refer to the variable:

// - first, it will be treated as the parameter with such a name that shadows the first global variable (i.e. we will  operate on the value passed as the first argument)
// - second, it will also be treated as the function parameter (the value passed as the second argument)
// - third, it will be treated as a global variable, because inside the function there is neither a local variable nor a parameter with that name that would shadow it;
// - fourth, it will be treated as global, the same as third.

// Of course, outside the function, each of these names will refer to global variables.
function add(first, second) {
  return first + second;
}
let first = 10,
  second = 20,
  third = 40,
  fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120
// Analyze the example carefully, writing down the specific values that are passed on to the add function in each of the four calls.

// Also try to run and analyze one more simple example, in which you can shadow variables with both parameters and local variables.
let a = 100,
  b = 200,
  c = 300;
function test(a) {
  let b = 10;
  console.log(a); // parameter a
  console.log(b); // local variable b
  console.log(c); // global variable c
}
test(1); // -> 1
// -> 10
// -> 300
console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300
