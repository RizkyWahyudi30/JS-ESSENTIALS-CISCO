// Type conversions

// Primitive construction functions

// Using literals is not the only way to create variables of the given primitive types. The second option is to make them using constructor functions. These types of functions are mainly used in JavaScript for object-oriented programming, which is outside the scope of our course. However, these few listed constructor functions can also be used to create primitives, not just objects (this is not a general feature, but only for the listed functions). The following functions will return primitives of a given type: Boolean, Number, BigInt, and String.z
const str = String();
const num = Number();
const bool = Boolean();

console.log(str); //  ->
console.log(num); //  ->  0
console.log(bool); //  ->  false

const big1 = BigInt(42);
console.log(big1); //  ->  42n

const big2 = BigInt(); //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

const numtest = 42;

const strFromNum1 = String(numtest);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);

// ================================================================================================================= //
// Conversion to String

let str1 = "text";
let strStr = String(str1);
console.log(`${typeof str1}  :  ${st1r}`); //  ->  string  :  text
console.log(`${typeof strStr}  :  ${strStr}`); //  ->  string  :  text

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr}  :  ${nr}`); //  ->  number  :  42
console.log(`${typeof strNr}  :  ${strNr}`); //  ->  string  :  42

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl}  :  ${bl}`); //  ->  boolean  :  true
console.log(`${typeof strBl}  :  ${strBl}`); //  ->  string  :  true

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr}  :  ${bnr}`); //  ->  bigint  :  123
console.log(`${typeof strBnr}  :  ${strBnr}`); //  ->  string  :  123

let un = undefined;
let strUn = String(un);
console.log(`${typeof un}  :  ${un}`); //  ->  undefined  :  undefined
console.log(`${typeof strUn}  :  ${strUn}`); //  ->  string  :  undefined

let n = null;
let strN = String(n);
console.log(`${typeof n}  :  ${n}`); //  ->  object  :  null
console.log(`${typeof strN}  :  ${strN}`); //  ->  string  :  null

// ================================================================================================================= //
// Conversion to Number

console.log(Number(42)); //  ->  42

console.log(Number("11")); //  ->  11
console.log(Number("0x11")); //  ->  17
console.log(Number("0o11")); //  ->  9
console.log(Number("0b11")); //  ->  3
console.log(Number("12e3")); //    ->  12000
console.log(Number("Infinity")); //  ->  Infinity
console.log(Number("text")); //  ->  NaN

console.log(Number(14n)); //  ->  14
console.log(Number(123456789123456789123n)); //  -  >    123456789123
456800000;

console.log(Number(true)); //  ->  1
console.log(Number(false)); //  ->  0

console.log(Number(undefined)); //    ->  NaN

console.log(Number(null)); //  ->  0

// ================================================================================================================= //
// Conversion to Boolean
```
Conversions to Boolean follow simple rules, as we can only have one of two values: true or false. The value false is always returned for:

    0,
    NaN,
    empty string,
    undefined,
    null
    
Any other value will result in true being returned.
```;

console.log(Boolean(true)); //  ->  true
console.log(Boolean(42)); //  ->  true
console.log(Boolean(0)); //  ->  false
console.log(Boolean(NaN)); //  ->  false
console.log(Boolean("text")); //  ->  true
console.log(Boolean("")); //  ->  false
console.log(Boolean(undefined)); //  ->  false
console.log(Boolean(null)); //  ->  false

// ================================================================================================================= //
// Conversion to BigInt
console.log(BigInt(11)); //  ->  11n
console.log(BigInt(0x11)); //  ->  17n
console.log(BigInt(11e2)); //  ->  1100n

console.log(BigInt(true)); //  ->  1n

console.log(BigInt("11")); //  ->  11n
console.log(BigInt("0x11")); //  ->  17n

console.log(BigInt(null)); //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt
console.log(BigInt(undefined)); //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
console.log(BigInt(NaN)); //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer

// ================================================================================================================= //
//
//
//
//  Implicit Conversions
const str2 = 42 + "1";
console.log(str2); //  ->  421
console.log(typeof str2); //  ->  string

const str3 = 42 - "1";
console.log(str3); //  ->  41
console.log(typeof str3); //  ->  number
