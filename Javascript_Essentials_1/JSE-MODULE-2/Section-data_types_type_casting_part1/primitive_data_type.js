// Primitive data types
// In JavaScript, there are six primitive (or simple) data types: Boolean, Number, BigInt, String, Symbol, and undefined

// Boolean
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false); //  ->  false
console.log(typeof false); //  ->  boolean
console.log(isDataValid); //  ->  true
console.log(typeof isDataValid); //  ->  boolean

// Number
const year = 1991;
let delayInSeconds = 0.00016;
let area = 16 * 3.14;
let halfArea = area / 2;

console.log(year); //  ->  1991;
console.log(typeof year); //  ->  number;

```
However, if a literal describing a number is preceded by an appropriate prefix, we can present it in hexadecimal (0x…), octal (0o...) or binary (0b...) form. We can also write numbers in exponential form, so for example, instead of 9000, we can write 9e3, and instead of 0.00123, we can write 123e-5. You are probably already familiar with the terms we used just now, such as decimal, hexadecimal, or exponential representation.
```;
let a = 10; //  decimal  -  default
let b = 0x10; //  hexadecimal
let c = 0o10; //  octal
let d = 0b10; //  binary

console.log(a); //  ->  10
console.log(b); //  ->  16
console.log(c); //  ->  8
console.log(d); //  ->  2

let x = 9e3;
let y = 123e-5;
console.log(x); //  ->  9000
console.log(y); //  ->  0.00123

// In addition to regular numbers in JavaScript, we use three additional special values, which are: Infinity, -Infinity and NaN (not a number).

let a1 = 1 / 0;
let b1 = -Infinity;

console.log(a1); //  ->  Infinity
console.log(b2); //  ->  -Infinity
console.log(typeof a2); //  ->  number
console.log(typeof b2); //  ->  number

let s = "it's  definitely  not  a  number";
let n = s * 10;
console.log(n); //  ->  NaN
console.log(typeof n); //  ->  number

//
// BigInt
// The BigInt type is not used too often. It allows us to write integers of virtually any length. For almost any normal numerical operations, the Number type is enough, but from time to time we need a type that can handle much bigger integers.

let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big); //  ->  1234567890000000000000n
console.log(typeof big); //  ->  bigint

console.log(big2); //  ->  1n
console.log(7n / 4n); //  ->  1n

// //
let big3 = 1000n + 20;
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions
let big4 = 1000n / 0n; //  ->  Uncaught  RangeError:  Division  by  zero

//
//
// String
// Strings, like other primitives, are immutable, so when we want to change even one letter in a string, in reality, we create a new string.
let country = "Malawi";
let continent = "Africa";

console.log(country); //  ->  Malawi
console.log(typeof country); //  ->  string
console.log(continent); //  ->  Africa
console.log(typeof continent); //  ->  string

// or
let message1 = "The  vessel  'Mars'  called  at  the  port.";
let message2 = 'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';

console.log(message1); //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2); //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

// or
let message11 = "The  vessel  'Mars'  called  at  the  port.";
let message22 = 'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';

console.log(message11); //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message22); //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

let path1 = "C:\\Windows";
console.log(path); //  ->  C:\Windows

// or
let path2 = "C:\\Windows" - "Windows";
console.log(path); //  ->  NaN

let test = "100" - "10";
console.log(test); //  ->  90
console.log(typeof test); //  ->  number

// or
let country2 = "Malawi";
let continent2 = "Africa";

// A very convenient mechanism that was introduced to JavaScript in 2015 is string interpolation. It allows you to treat a character string as a template, in which you can place values in selected places, such as those taken from variables. Such a literal is created using backticks (or grave accents) instead of quotation marks. The places where values are inserted are marked with curly brackets preceded by a $ sign.
let sentence = `  ${country2}  is  located  in  ${continent2}.`;
console.log(sentence); //  ->  Malawi  is  located  in  Africa.

//
//
//
// After the operation is completed, the interpreter removes the temporary object. So from our point of view, it looks like we just called a method on a given primitive type.
// Commonly used string methods and properties (i.e. named values related to the object) are:

let str = "java  script  language";

// length: property, returns the number of characters in a string;
console.log(str.length); //  ->  20
console.log("test".length); //  ->  4

// charAt(index): method, returns the character at the "index" position in the string (indexes start from 0);
console.log(str.charAt(0)); //  ->  'j'
console.log("abc".charAt(1)); //  ->  'b'

// slice(beginIndex, [optional] endIndex): method, returns a new string that is created from the characters between beginIndex (included) and endIndex (excluded); if endIndex is omitted, then the new string is from beginIndex to the end of the string
console.log(str.slice(0, 4)); //  ->  'java'
console.log("test".slice(1, 3)); //  ->  'es'

// split(separator, [optional] limit): method, splits the string into substrings whenever a separator is found in that string, and returns an array of those substrings (we will say a few words about arrays in a moment), while an optional limit limits the number of substrings added to the list.
console.log(str.split("  ")); //  ->  ['java',  'script',  'language']
console.log("192.168.1.1".split(".")); //  ->  ['192',  '168',  '1',  '1']

//
//
// Undefined
let declaredVar;
console.log(typeof declaredVar); //  ->  undefined

declaredVar = 5;
console.log(typeof declaredVar); //  ->  number

declaredVar = undefined;
console.log(typeof declaredVar); //  ->  undefined

// The  undefined  value  can  also  be  returned  by  the  typeof  operator  when  a  non-existent  variable  is  used  as  an  argument.

Console.log(typeof notDeclaredVar); //  ->  undefined
console.log(notDeclaredVar); //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined

//
//
//
// Null
// The null value is quite specific. The value itself is primitive, while the type to which it belongs is not a primitive type, such as Number or undefined. This is a separate category, associated with complex types, such as objects. The null value is used to indicate that the variable does not contain anything, and most often it is a variable that is intended to contain values of complex types.
let someResource;
console.log(someResource); //  ->  undefined
console.log(typeof someResource); //  ->  undefined

someResource = null;
console.log(someResource); //  ->  null
console.log(typeof someResource); //  ->  object
