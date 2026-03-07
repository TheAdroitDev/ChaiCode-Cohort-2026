// Map --> Obj (keys can be anything)
// In Obj keys can be either "string" or "symbol" 

/*
  Methods and properties are:
    - `new Map()` – creates the map.
    - `map.set(key, value)` – stores the value by the key.
    - `map.get(key)` – returns the value by the key, `undefined` if `key` doesn’t exist in map.
    - `map.has(key)` – returns `true` if the `key` exists, `false` otherwise.
    - `map.delete(key)` – removes the element (the key/value pair) by the key.
    - `map.clear()` – removes everything from the map.
    - `map.size` – returns the current element count.

*/

const m = new Map();
m.set(1, 'one');
// console.log(m.get(1));


// Count word frequency
const text = "the cat sat on the mat the cat";
const freq = new Map();

for (const word of text.split(" ")) {
  const wordFreq = freq.get(word) || 0;
  
  freq.set(word, wordFreq +1);  // the -> 1 , cat ->1 ,sat -> 1, on --> 1, the -> 1+1 =2
}

// console.log(freq);

// console.log(freq.keys());
// console.log(freq.values());
// console.log(freq.entries());

const affiliates = new Map();

const first = {name: "vidya4sure"};
const second = {name: "devwithjay"};

affiliates.set(first, 50_000)
affiliates.set(second, 20_000)

// console.log(affiliates);

let obj = {
  name: "Ashu",
  age: 22,
};


// Obj to Map
let map = new Map(Object.entries(obj));

console.log(map);

// Map to Obj
let obj1 = Object.fromEntries(map);
console.log(obj1);