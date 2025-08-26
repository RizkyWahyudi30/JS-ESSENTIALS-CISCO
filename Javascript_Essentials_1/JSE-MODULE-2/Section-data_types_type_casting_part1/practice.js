// SECTION PRACTICE

// Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.
let boolType = Boolean(1); // change 1 = true
console.log(`display: ${boolType}. Type: ${typeof boolType}`);

let numType = Number("123");
console.log(`display: ${numType}. Type: ${typeof numType}`);

let bigInt = BigInt(numType);
console.log(`display: ${bigInt}. Type: ${typeof bigInt}`);

let strType = String(false);
console.log(`display: ${strType}. Type: ${typeof strType}`);

// Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

console.log(`display: ${boolType}. Type: ${typeof boolType}`);
console.log(`display: ${numType}. Type: ${typeof numType}`);
console.log(`display: ${bigInt}. Type: ${typeof bigInt}`);
console.log(`display: ${strType}. Type: ${typeof strType}`);

// Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

let Bool = Boolean(BigInt(Number("2")));
console.log(Bool);
console.log(`display: ${Bool}. Type: ${typeof Bool}`);

// Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.

let boolSame = true + true;
console.log(boolSame, typeof boolSame);

let numSame = 214 - 321;
console.log(numSame, typeof numSame);

// Question 5: Try adding two values of different types and check the results.

let strDiff = "Node" + 12;
console.log(strDiff, typeof strDiff);

// let BIDiff = 121n - "Str";
// console.log(BIDiff, typeof BIDiff); // akan error

// Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

let str1 = 42 + +"1";
console.log(str1, typeof str1);
// why use + in front string "1"? + in front
