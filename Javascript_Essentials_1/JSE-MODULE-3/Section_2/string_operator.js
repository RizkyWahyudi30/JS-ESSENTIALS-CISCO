// String operators
// The only operator in this group is the concatenation +. This operator will convert everything to a String if any of the operands is a String type. Finally, it will create a new character string, attaching the right operand at the end of the left operand.
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

let sentence = "Happy New Year ";
let newSentence = sentence + 10191;

console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

// // Compound Assignment Operators
// You can probably guess that this operator can also be used in conjunction with the replacement operator. Its operation is so intuitive that we will stop with a simple example:
let sentence2 = "Happy New ";
sentence2 += "Year ";
sentence2 += 10191;
console.log(sentence2); // -> Happy New Year 10191

console.log(100n < 102); // -> true
console.log(10 >= 10n); // -> true

// #  Other operators
// The list of operators in JavaScript is much longer, but many of them would not be particularly useful at this stage of learning, such as bitwise operators, which operate on single bits of operands. However, it is worth mentioning a few more operators, some of which have already appeared in earlier examples.

// typeof
// We already introduced the typeof operator when discussing data types. It is a unary operator, which checks the type of operand (it can be a variable or a literal). The operator returns a string with the type name, such as "boolean" or "number".
let year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean

// instanceof
// The instanceof operator appeared while discussing arrays. It is a binary operator that checks whether an object (left operand) is of some type (right operand). Depending on the test result, it returns true or false.
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

// delete
// The unary delete operator was introduced while discussing objects. It allows you to delete a selected field of the object whose name is indicated with an operand.
let user = {
  name: "Alice",
  age: 38,
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

// ternary
// This operator is most often used to place one of the two values in the variable depending on a certain condition. We will come back to the operator when discussing the conditional if, but here we’ll provide only a simple example of its use. The three operands are separated from each other by ? (the first from the second) and : (the second from the third).
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob
