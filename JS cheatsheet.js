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

( test = { a: 10, b: 20, c: 30, d: 40 });

console.log(a);
console.log(b);
console.log(rest);

////////////////////////////////
// Spread Operator

const arr = [7, 8, 9];

// Bad Array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Better Array
const newArr = [1, 2, ...arr];
console.log(newArr);

////////////////////////////////
// Spread Operator

const str = 'noob';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

////////////////////////////////
// OR Operator

// Accept Truthy Value
console.log(true || false);

////////////////////////////////
// Nullish Coalecing Operator

const test = null ?? 10;

////////////////////////////////
// For of Loop

const menu = [test1, test2, test3, test4];

// Will put All the Array Element Seperately On A String On the Console
// Just Like Saying console.log('test1', ...)   
for (const item of menu) console.log(item);

////////////////////////////////
// Sets

const Sets = new Set([
  'test',
  'test', // Duplicate
  'stuff1',
  'test2',
  'stuff1', // Duplicate
  'test2', // Duplicate
]);

console.log(Sets); // Sets Are Unique And They Will Remove Duplicates

/////////////////////////////////
// Maps

const Test = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3 , 'JavaScript'], // The Numbers Are Keys Like Object
]);

//////////////////////////////////
// .toLowerCase() - .ToUpperCase() 

//  Makes Every Text Lowercase
const test = 'Test1'.toLowerCase();

//  Makes Every Text Uppercase
const test2 = 'Test1'.toUpperCase();

//////////////////////////////////
// .trim()

// Removes Whitespace on both sides of a string
const test = '     Test1   '.trim();

//////////////////////////////////
// toString()

// this Number Will Be Converted To A String
const Number = 10;

// Converted To A String
const string = Number.toString();

//////////////////////////////////
// forEach()

// Example
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function(mov, index ) {
  if (mov > 0) {
  console.log(`You Deposit ${index + 1}: ${mov}`);
  } else {
      console.log(`You Withdrew ${index + 1}: ${Math.abs(mov)}`);
  }
});

//////////////////////////////////
// .map()

// Example

// NOTE: .map() Returns A New Array
// NOTE: .map() Does Not Change The Original Array
const movements = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
); 

//////////////////////////////////
// .filter()

// Example

let TestArr = [-1, 2, 3, 4, -5, 6, 7, 8, -9, 10];

// NOTE: .filter() Returns A New Array
// NOTE: .filter() Does Not Change The Original Array
// NOTE: .filter() Returns A New Array
// NOTE: .filter() Creates A New Array And The Only Values That Pass The Test Are Stored In The New Array
const Test = movements.filter(function (mov) {
  return mov < 0;
});

////////////////////////////////////
// .reduce()

// Example
const test = [1, 2, 3, 4, 5];

// NOTE: .reduce() use The Array Elements To Create A Single Value
const test = test.reduce(function (acc, cur, i) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

////////////////////////////////////
// Prefix Increment Operator

// Example
let test = 0;

// Increments The Value By 1

// Normal Increment

// NOTE: Increments The Value By 1
// NOTE: The Value Will Be 1 but It Will Not Be 1 Because You Need Console.log To See The Value
test++;

// Prefix Increment
// NOTE: Increments The Value By 1
// NOTE: It will be 1 And You Will See 1 Unlike The Normal Increment
++test;

////////////////////////////////////
// ClassList

// NOTE: Classlist Is a Part Of The DOM

// Example
const test = document.querySelector('#test');

// In the CSS
// .test1 {
//   background-color: red;
// }

// this will add the class test1 to the element
test.classList.add('test1');

////////////////////////////////////
// setTimeout()

// Example
setTimeout(function () {
  console.log('test');
  // The 1000 Is The Time In Milliseconds 1000 = 1 second
}, 1000);

////////////////////////////////////
// setInterval()

// Example
setInterval(function () {
  console.log('test');
  // The 1000 Is The Time In Milliseconds 1000 = 1 second
  // This Will Run Every Second because 1000 = 1 second
  // setInterval() Will Keep Running
}, 1000);

////////////////////////////////////
// clearInterval()

// Example
const test = setInterval(function () {
  console.log('test');
}, 1000);

// NOTE: clearInterval() Will Stop The Interval
clearInterval(test);

////////////////////////////////////
// clearTimeout()

// Example
const test = setTimeout(function () {
  console.log('test');
}, 1000);

// Same as clearInterval()
clearTimeout(test);

////////////////////////////////////