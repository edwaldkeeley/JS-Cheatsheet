// @ts-nocheck

// Variables
// Const

// Cant Change A Variable Declared With Const
const x = 1;

// Let

// Useful If You Wanna Change The Variable
let x = 1;

// Var

// Not Recommended To Be Used
var x = 1;

///////////////////////////

// Object

// a Object That Store Stuff
const Object = {
  Stuff: "Random",
  Stuff2: "Random2",
};

////////////////////////////
// Array

// Create a Array
const Array = ["stuff", "stuff2"];

///////////////////////////
// Function

// a Function
function MyFunction(a, b) {
  return a + b;
}

const result = MyFunction(2, 9);
////////////////////////////
// Math-Random

//Create a Random Number
console.log(Math.random());

/////////////////////////////
// Math-Trunc

// Remove Decimal Number
console.log(Math.trunc);

/////////////////////////////
// This Keyword

// Refer To a Global Object
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAge(1991);

/////////////////////////////
// IF ELSE Statement

const truly = true;
//Only Execute If True
if (truly) {
  console.log("Is True");
} else {
  // Only Execute If False
  console.log("Is False");
}

//////////////////////////////
// For Loop

// Loop Over Until It Reached The Limit
for (let i = 0; i < 5; i++) {
  console.log(`Test${i}`);
}

//////////////////////////////
// While Loop

while (i < 10) {
  console.log("test");
  i++;
}

///////////////////////////////
// Arrow Function

const myFunction = (a, b) => a * b;

///////////////////////////////
// Equality Operator

// Strict Equality
console.log(1 === 1);

// Loose Equality
// Not Recommended To Be Used
console.log(1 == "1");

////////////////////////////////
// Dates

// Useful On Some Website
const date = new Date();

////////////////////////////////
// Strict InEquality Operator

console.log("1" !== 1);

// Loose InEquality Operator

console.log("1" != 1);

////////////////////////////////
//Strict Equality Comparison Operator

// If Equal Then True If Not Equal Then False
console.log(1 === 1);

//Loose Equality Comparison Operator

console.log(1 == 1);

/////////////////////////////////
// Typeof

// Typeof Show What DataType It Is
console.log(typeof "hello");

////////////////////////////////
// Destructuring Assignment
<<<<<<< HEAD
( test = { a: 10, b: 20, c: 30, d: 40 });
=======
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
>>>>>>> 67a641917a2f5d59ffe12857b34e2a06c8e52f5d
console.log(a);
console.log(b);
console.log(rest);

////////////////////////////////
<<<<<<< HEAD
// Spread Operator

const arr = [7, 8, 9];

// Bad Array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Better Array
const newArr = [1, 2, ...arr];
console.log(newArr);

////////////////////////////////