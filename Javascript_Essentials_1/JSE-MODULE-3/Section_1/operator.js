// 3.0.1 Operators
// Operators in programming languages are symbols (sometimes also names) that are used to perform certain actions on arguments called operands. perands can be both values and variables. We have encountered operators several times in previous examples, for example, the assignment symbol = or the keyword typeof.
//  The addition operator + is a typical binary operator (it uses two operands), while the typeof operator is unary (it uses only one operand).

// In JavaScript, there is also one ternary operator (operating on three operands), about which we will say a few words in a moment.

// We can differentiate between prefix operators (occurring before the operand), postfix operators (after the operand) and infix operators (between operands). However, it’s common to categorize operators according to the context in which they are used: so we have assignment; arithmetic; logical; or conditional operators. We will further review the basic JavaScript operators according to this classification.

//
//
//
//
// Assigment Operators
const name = "Sizuka";
console.log(name);
// If several assignment operators appear in a sequence, the order from right to left applies. So the sequence:
let year = 2103;
let newYear = (year = 202);
console.log(newYear);

// Arithmatic Operators
// Arithmetic operators express mathematical operations, and they accept numerical values and variables. All arith
console.log(2 + 2 * 2); // -> 6
console.log(2 + 2 * 2); // -> 6
console.log((2 + 2) * 2); // -> 8

const x = 5;
const y = 2;
// The basic binary arithmetic operators are the addition +, subtraction -, multiplication *, division /, division remainder % and power **
console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("Modulus :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25

//
//
// Unary Arithmatic Operators
// There are also several unary arithmetic operators (operating on a single operand). Among them there are the plus + and minus - operators. Both operators convert operands to the Number type, while the minus operator additionally negates it.
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number

//
//
// Unary increment and decrement operators
// Among the arithmetic operators, we also have at our disposal the unary increment ++ and decrement -- operators, in both prefix and postfix versions. They allow us to increase (increment) or decrease (decrement) the value of the operand by 1.
let inc = 12;
let dec = 15;

console.log(inc++);
console.log(inc);

console.log(dec--);
console.log(dec);

//
//
// Compound Assignment Operators
// Binary arithmetic operators can be combined with the assignment operator, resulting in the addition assignment +=, the subtraction assignment -=, the multiplication assignment *=, the division assignment /=, the remainder assignment %=, and the power assignment **=.
let c = 10;

c += 2;
console.log(x); // -> 12
c -= 4;
console.log(x); // -> 8
c *= 3;
console.log(x); // -> 24
c /= 6;
console.log(x); // -> 4
c **= 3;
console.log(x); // -> 64
c %= 10;
console.log(x); // -> 4

//
//
// Logical operators
// Logical operators work with Boolean type values (true or false). For now, we can assume that they work on operands of this type and return values of this type only. JavaScript provides us with three such operators:

//     a conjunction, i.e. logical AND (&& symbol)
//     an alternative, i.e. logical OR (symbol ||)
//     a negation, i.e. logical NOT (symbol !)

// Their meaning is the same as in mathematical logic, and if you're not sure how they work, it's easiest to explain them based on logical sentences.

// # AND
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false

// # OR
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false

// # NOT
console.log(!true); // -> false
console.log(!false); // -> true

// We can, of course, connect as many of these operators as we need, creating more complex "sentences". As in the case of arithmetic operators, the sequence of actions is determined here. The highest priority is negation !, then conjunction &&, and finally the alternative ||. The precedence can of course be changed by means of parentheses.
const a = false;
const b = true;
const j = false;
const k = true;

console.log((a && b && j) || k); // -> true
console.log(a && b && (j || k)); // -> false
