let arr1 = new Array();

let arr2 = [];

const appleTVShows = ["Silo", "See", "Hijack", "Severance", "Pluribus"];

// Access
// console.log(appleTVShows.at(-1));

// Array in JS is --> Deque... [stack + queue]

// queue [FIFO] --> Push, Shift..
// stack [LIFO] --> Push, Pop.

// Internals
// Obj but special
// Index, Value
// The JS engine tries to store its elements in the contiguous memory area, one after another.

// Loops
for (let i = 0; i < appleTVShows.length; i++) {
  // console.log(appleTVShows[i]);
}

for (const tvShow of appleTVShows) {
  // console.log(tvShow);
}

// length --> property
let food = [];

food[7] = "Idali";
// console.log(food.length);

// DSA arrays, fill (true, 0)
// console.log(new Array(50).fill(0));

// Methods
// splice(), concat()
// forEach() --> update existing array

// search -->
// indexOf(), lastIndexOf(), includes(), find(), findIndex(), findLastIndex()
// filter() if we want to find multiple elements…

// Transform
// reverse() --> update existing array
// split(delim), join(glue)
// sort()

const names = [
  "Atchuyt",
  "Madhav",
  "Kṛṣṇa",
  "Keshav",
  "Damodar",
  "Gauranga",
  "Gopal",
  "Radharaman",
];

// console.log(names.sort());

const numbers = [5, 11, 2, 37, 41, 77, 8, 28];

// Lexicographically
// console.log(numbers.sort());

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}

// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));

const names2 = [
  "Atchuyt",
  "Madhav",
  "Kṛṣṇa",
  "Kubera",
  "Damodar",
  "Gauranga",
  "Gopal",
  "Radharaman",
];

// console.log(names2.sort((a, b) => a.localeCompare(b)));

/*

  - The `arr.map()` method is one of the most useful and often used.
  - `map()` is similar to `forEach()` means it loops throughout the array.
  - The only difference is :
      - `forEach()` doesn't allocate memory to store values so it doesn't return value, while `map()` allocates memory to store and return values.
      - `forEach()` allows for a callback function that will allow us to change the original array, while `map()` returns a new array while leaving the original one as it is.
*/

const shoppingCart = [
  {name: `Macbook Pro 16`, price: 3499},
  {name: `iPhone 17 Pro`, price: 1099},
  {name: `iPad Pro`, price: 1299},
  {name: `Apple Watch`, price: 249},
];

const prices = shoppingCart.map(item => item.price);
// console.log(prices);

const total = prices.reduce((total, price) => total + price, 0);
// console.log(total);

const n = [-20, -9, 0, 10, 45];
const max = n.reduce((max, curr) => {
  if (max < curr) max = curr;

  return max;
}, -Infinity);


const min = n.reduce((min, curr) => {
  if (min > curr) min = curr;

  return min;
}, Infinity);

// console.log(min);

// console.log(typeof prices);
console.log(Array.isArray(prices));


