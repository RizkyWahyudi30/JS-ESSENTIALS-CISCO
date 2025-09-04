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

// # Loops and arrays
// his time the program will be a bit more complicated. We want the user to enter names during the program's execution (we will use the prompt dialog box), which will be placed in the array one by one. Entering the names will end when the Cancel button is pressed. Then we will write the entire contents of the array (i.e. all entered names) to the console.

let names = [];
let isOverr = false;
while (!isOverr) {
  let name = prompt("Enter another name or press cancel.");
  if (name != null) {
    names.push(name);
  } else {
    isOverr = true;
  }
}

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// The names array is initially empty. In each iteration of the while loop we call the prompt dialog box. If the user enters a new name and presses the OK button, this name will be entered in the local name variable. If the user clicks Cancel, the variable will contain null. So we check in the conditional instruction if the name is different from null. If so, the value of the name variable is attached to the end of the names array using the push method (if you do not remember it, go back to the chapter where we discussed arrays). If the name is null, the isOver variable value is changed to end the while loop.

// After leaving the while loop, we go through the whole names array (using the for loop and the length property of the names array) and we display all the names placed there. In this way, we have done something absolutely new unnoticed. Using arrays, loops, and interaction with the user (prompt dialog box) we have created and filled in a dynamic data structure. Please note that while writing this program, it is not clear how many array elements there will be, or even what elements there will be.

let valuess = [10, 30, 50, 100];
for (let i = 0; i < valuess.length; i++) {
  console.log(valuess[i]); // -> 10, 30, 50, 100
}

for (let i = valuess.length - 1; i >= 0; i--) {
  console.log(valuess[i]); // -> 100, 50, 30, 10
}

for (let i = 0; i < valuess.length; i += 2) {
  console.log(valuess[i]); // -> 10, 50
}

//
// # for ... of
// In addition to the regular for loop, there are two specific versions, one of which, for ... of, is dedicated for use with arrays (and other iterative structures, which are however beyond the scope of this course). In a loop of this type, we do not explicitly specify any conditions or number of iterations, as it is performed exactly as many times as there are elements in the indicated array.
```
for (variable of array) {
    block of code
}
```;

let valuese = [10, 30, 50, 100];
let sume = 0;
for (let i = 0; i < valuese.length; i++) {
  sume += valuese[i];
}
console.log(sum); // -> 190

// The version of this program using the loop for ... of will look slightly different:
let valuesee = [10, 30, 50, 100];
let sumee = 0;
for (let numberee of valuesee) {
  sumee += numberee;
}
console.log(sumee); // -> 190

// Let's look at one more example.
// This time, we declare a cities array, which contains objects describing some of the biggest cities in the world.

// Each object contains name and population fields. Using the for ... of loop, we go through this array and display information about all cities that have more than 20 million inhabitants.
let cities = [
  { name: "New York", population: 18.65e6 },
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 },
];

for (city of cities) {
  if (city.population > 20e6) {
    console.log(`${city.name} (${city.population})`);
  }
}

//
// # for ... in
// There is also a version of the for loop that enables us to walk through object fields. This is a for ... in construction. It iterates through all fields of the indicated object, placing the names of these fields (or keys) in the variable. In the example, we use an object containing data about a user:
let user = {
  name: "Calvin",
  surname: "Hart",
  age: 66,
  email: "CalvinMHart@teleworm.us",
};

for (key in user) {
  console.log(key); // -> name, surname, age, email
}
// In each loop iteration, the names of successive fields of the user object are assigned to the key variable, i.e.: name, surname, age, email. Then we write them on the console. But what if we want to retrieve the values stored in the fields with these names? In order to get access to the specified field, we use dot notation (the part of the course dedicated to data types) that is, after the name of the object, we write a dot and the field name (key). The key given in this notation is always treated as a literal. In the for ... in loop, this approach will not work, because the field name (key) is placed in a variable. Fortunately, we have an alternative solution, bracket notation. It allows you to refer to the selected object field using brackets (like in arrays). In the square bracket behind the object name, we place the field name, which can be either a literal or a variable containing that name.

/*
console.log(user.name); // -> Calvin
console.log(user[name]); // -> Calvin

Using bracket notation, we improve our example by displaying not only the keys, but also their assigned values.
for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};

*/

//
// # The break and continue statements
// The break statement is used to terminate the execution of a loop or a switch statement. In each of these contexts, whenever the JavaScript engine encounters a break statement, it exits the whole loop or switch statement, and jumps to the first statement after that loop or switch.

// In the example, we can see an infinite while loop that will be exited using break after the variable i becomes greater than or equal to 5. Such a use of break is only of illustrative importance, because it would make more sense to include this condition directly in the while construction.
let ii = 0;
// An infinite loop
while (true) {
  console.log(ii);
  ii++;
  if (ii >= 5) {
    break;
  }
}

alert(`Exited the loop with a break (${ii}).`);

// Just like break, continue can be used in loops (but not in the switch statement). When used, it applies to the closest surrounding loop. The continue statement, in contrast to break, does not end the whole loop, but rather starts the next iteration of this loop.

// We can think of it as jumping right to the end of the current iteration.
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

//
// # The break keyword
// We also need to say a few words about the break keyword. In the example, the break keyword is present in all cases except in the default case. In contrast to if statements, switch statements do not execute just one branch, but rather they execute the entire code from the first case that matches until the end of the switch statement. This behavior is called pass-through and has some uses, but most of the time we want to execute only one branch, and for that reason the break keyword is present. When a JavaScript interpreter comes to a break, it will jump out of the current switch statement.

let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
  case "a":
    alert("Gate A: empty");
  case "b":
    alert("Gate B: main prize");
    win = true;
  case "c":
    alert("Gate C: empty");
  default:
    alert("No gate " + String(gate));
}

if (win) {
  alert("Winner!");
}
// The only difference is that now there are no break keywords at all. Run this code and check what happens when the answer "a" is given to the prompt dialog. Now all alerts are displayed, even the default one.

let gaten = prompt("Choose gate: a, b, or c");
let winn = false;

switch (gaten) {
  case "a":
  case "A":
  case 1:
  case "1":
    alert("Gate A: empty");
    break;
  case "b":
  case "B":
  case 2:
  case "2":
    alert("Gate B: main prize");
    winn = true;
    break;
  case "c":
  case "C":
  case 3:
  case "3":
    alert("Gate C: empty");
    break;
  default:
    alert("No gate " + String(gaten));
}

if (winn) {
  alert("Winner!");
}

// The code visible in the example will behave the same when "a", "A", 1 or "1" is given as the answer to the prompt.

// The last important part is that if a more complex code is needed inside any given case, we should place that code in separate code blocks by additionally surrounding the code with curly brackets. This will add to code readability and allow for the declaration of variables only in the given case scope.

let gates = prompt("Choose gate: a, b, or c");
let wins = false;

switch (gates) {
  case "a": {
    let message = "Gate A";
    console.log(message);
    break;
  }
  case "b": {
    let message = "Gate B";
    console.log(message);
    break;
  }
  case "c": {
    let message = "Gate C";
    console.log(message);
    break;
  }
  default:
    alert("No gate " + String(gates));
}

if (wins) {
  alert("Winner!");
}
