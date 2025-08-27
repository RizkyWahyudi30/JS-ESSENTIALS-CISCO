// Complex data types

// Object and Array
// =========================================================================================== //

// object
let firObj = {};
console.log(typeof firObj);

let typeData = {
  str: "Error!",
  num: 124,
  bool: true,
  unde: undefined,
  null: null,
};
console.log(typeData);

console.log(typeData.str);
console.log(typeData.bool);

let user1 = {
  name: "Nelv",
  surname: "Joshua",
  age: 34,
  email: "nelvjoshua@gmail.com",
};
console.log(user1.age);
user1.age = 39;
user1.phone = "1241-4214-2411";
console.log(user1);

let user2 = {
  name: "Husha",
  surname: "Gisni",
  age: 19,
  email: "hushagisni21@gmail.com",
};
console.log(user2.email);
user2.location = "Amerika serikat";
delete user2.location;
console.log(user2);

//
//
//
// Array
// An array, like an object, is a complex data type that can be used to store a data collection. Similar to an object, the stored data (the values) can be of any type. The difference between these structures is that in an array we only store values, without the associated names (i.e. the keys).
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); //  ->  Sun
console.log(days[2]); //  ->  Tue
console.log(days[5]); //  ->  Fri

days[0] = "Sunday";
console.log(days[0]); //  ->  Sunday

let emptyArray = [];
console.log(emptyArray[0]); //  ->  undefined
//
let animals = [];
console.log(animals[0]); //  ->  undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); //  ->  dog
console.log(animals[1]); //  ->  undefined
console.log(animals[2]); //  ->  cat

// Usually, we store the same type of data in one array, but as we mentioned earlier, this is not required by JavaScript. So we can easily create an array containing elements of different types.
let values = ["Test", 7, 12.3, false];

// As we have already said, an array element can be of any type. What is interesting is the fact that we can also store arrays as elements of the array, and we can access the elements of this nested array using multiple square brackets.
let names = [
  ["Olivia", "Emma", "Mia", "Sofia"],
  ["William", "James", "Daniel"],
];
console.log(names[0]); //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]); //  ->  Emma
console.log(names[1][1]); //  ->  James

let femaleNames = names[0];
console.log(femaleNames[0]); //  ->  Olivia
console.log(femaleNames[2]); //  ->  Mia

//
//
//
//
// What can arrays be useful for in practice?

// They are primarily a convenient way to store a collection of elements under one name. Additionally, it is very important that we can add new elements to an array while the program is running.

// Remember the example with the users of the system we tested while discussing objects? One of the downsides of the solution presented there was the need to declare variables for all users, so at the stage of writing the program we had to know the number of users. Using an array, we can add new users while the program is running. We mentioned several times that the array elements can be any data, including objects. As a reminder, let's repeat the example in which we declare two object variables, user1 and user2, containing information about two system users:

// Let's put information about these two users into the users array and try to display some information as part of the test:

let users = [
  {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us",
  },
  {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com",
  },
];

console.log(users[0].name); //  ->  Calvin
console.log(users[1].age); //  ->  21

// Let's try to add a new user to the array. We will do it using the only way we know so far, which is by assigning a new element to a free index (this is a continuation of the previous example).
users[2] = {
  name: "Irene",
  surname: "Purnell",
  age: 32,
  email: "IreneHPurnell@rhyta.com",
};

console.log(users[0].name); //  ->  Calvin
console.log(users[1].name); //  ->  Mateus
console.log(users[2].name); //  ->  Irene

//
//
//
//
//
//
// Quite recently we introduced the concepts of method and property. They appeared when we were talking about the String type. These were functions and values related to a specific object. Now it turns out that an array is implemented as an object in JavaScript, so it probably also has its methods and properties. And indeed it does. There are many very useful methods that help us to work with arrays, such as combining arrays, cutting out elements, sorting, or filtering.

// We will only look at some of them now, because many others require us to be able to create our own functions. We will come back to some of them in the section dedicated to functions.

// 1. Length -> Property
let names2 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names2.length); //  ->  4

names[5] = "Amelia";
console.log(names.length); //  ->  6

console.log(names); //  ->  ["Olivia",  "Emma",  "Mateo",  "Samuel",  undefined,  "Amelia"]
console.log(names[3]); //  ->  Samuel
console.log(names[4]); //  ->  undefined
console.log(names[5]); //  ->  Amelia

// 2. indexOf
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); //  ->  2
console.log(names.indexOf("Victor")); //  ->  -1
//  The method returns -1 if the element is not found. If there is more than one element with the same value in the array, the index of the first element is returned.

// 3. Push
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); //  ->  4

names.push("Amelia");
console.log(names.length); //  ->  5
console.log(names); //  -  >  ["Olivia",  "Emma",  "Mateo",  "Samuel",  "Amelia"]

// 4. Unshift
// The unshift method works similarly to push, the difference being that a new element is added to the beginning of the array
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); //  ->  2
console.log(names.indexOf("Victor")); //  ->  -1

// 5. Pop
// The pop method allows you to remove the last element from the array. As a result of its execution, the element with the largest index is returned, while at the same time it is removed from the original array. The length of the array is obviously reduced by 1.
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); //  ->  4

let name2 = names.pop();
console.log(names.length); //  ->  3
console.log(name); //  ->  Samuel
console.log(names); //  ->  ["Olivia",  "Emma",  "Mateo"]

// 6. Shift
// The shift method works similarly to pop, only this time we remove the element from the beginning of the array (with the index 0). The removed element is returned by the method, all other elements are shifted to the left, completing the empty space. The length of the original array is reduced by 1.
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); //  ->  4

let name3 = names.shift();
console.log(names.length); //  ->  3
console.log(name3); //  ->  Olivia
console.log(names); //  ->  ["Emma",  "Mateo",  "Samuel"]

// 7. Reverse
// The reverse method reverses the order of elements in the array. As a result of its calling, the first element of the original array will become the last, the second last but one, and so on.
let names = ["Olivia", "Emma", "Mateo", "Samuel"];

names.reverse();
console.log(names); //  ->  ["Samuel",  "Mateo",  "Emma",   "Olivia"]

// 8. Slice
// The slice method allows you to create a new array from selected elements of the original array. Calling the method does not affect the original array. The method takes either one or two integer values as arguments.

// The basic combinations are:

//     one argument larger than zero – all elements from the index given as an argument to the end of the array are copied;
//     two arguments larger than zero – the element from the index specified as the first argument to the element specified as the second argument are copied;
//     two arguments, first positive, second negative – all elements from the specified index to the end of the array are copied, except for the specified number of the last elements (e.g. argument -3 means that we do not copy the last three elements)
//     one negative argument – the specified number of the last elements are copied to the end of the array (e.g. -2 means that you copy the last two elements).
let names = ["Olivia", "Emma", "Mateo", "Samuel"];

let n1 = names.slice(2);
console.log(n1); //  ->  ["Mateo",  "Samuel"]

let n2 = names.slice(1, 3);
console.log(n2); //  ->  ["Emma",  "Mateo"]

let n3 = names.slice(0, -1);
console.log(n3); //  ->  ["Olivia",  "Emma",  "Mateo"]

let n4 = names.slice(-1);
console.log(n4); //  ->  ["Samuel"]

console.log(names); //  ->  ["Olivia",  "Emma",  "Mateo",   "Samuel"]

// 9. Concat
// The concat method creates a new array by attaching elements from the array given as an argument to the original array elements. The method changes neither the original array nor the array specified as an argument.
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat(otherNames);

console.log(names); //  ->  ["Olivia",  "Emma",  "Mateo",   "Samuel"]
console.log(otherNames); //  ->  ["William",  "Jane"]
console.log(allNames); //  ->  ["Olivia",  "Emma",  "Mateo",   "Samuel",  "William",  "Jane"]
