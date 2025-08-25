// Scope

// Program blocks. Let's look at an example:
let counter;
console.log(counter); // undefined
{
  counter = 240;
  console.log(counter); // 240
}
counter = counter + 1;
console.log(counter); // 241
// or we can write : counter += 1;

// Program blocks can be nested, that is, we can create one block inside of another one.
let counters;
console.log(counters); //  ->  undefined
{
  counters = 1;
  {
    console.log(counters); //  ->  1
  }
}
counters = counters + 1;
console.log(counters); //  ->  2

// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //

// let and const

// With LET :
// Let's look   at a simple example:
let height = 180;
{
  let weight = 70;
  console.log(height); //  ->  180
  console.log(weight); //  ->  70
}
console.log(height); //  ->  180
console.log(weight); //  ->  Uncaught  ReferenceError:  weight  is  not  defined

// or
let height2 = 200;
{
  let weight = 100;
  {
    let info = "tall";
    console.log(height2); //  ->  200
    console.log(weight); //  ->  100
    console.log(info); //  ->  tall
  }
  console.log(height2); //  ->  200
  console.log(weight); //  ->  100
  console.log(info); //  ->  Uncaught  ReferenceError:  info  is  not  defined
}

//
//
// With VAR :
var height3 = 180;
{
  var weight = 70;
  console.log(height3); //  ->  180
  console.log(weight); //  ->  70
}
console.log(height3); //  ->  180
console.log(weight); //  ->  70
