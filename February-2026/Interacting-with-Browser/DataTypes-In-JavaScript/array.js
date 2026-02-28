const trainCode = Array.from("DUST");

// The splice() method is a destructive array method in JavaScript used to add, remove, or replace elements in place
console.log(typeof trainCode)
console.log(Array.isArray(trainCode))

//  If you want to create a new array with a segment removed without changing the original, you should use toSpliced() (modern) or slice()/filter() instead.


// Key Points
// 1. prefer [] not Array(n) because it can result in memory issues causing hard coded memory sloting: Example [] uses memory according to need i.e. demand and supply. However, in Array() it allocates full memory
// 2. arrays are 0 based.
// 3. Arrays mutable methods => push, pop, shift, unshift, splice
// 3. Arrays immutable methods => concat, slice, flat, flatmap eg: [1,2,3,4,[5,6]]
// 4. Searching: includes()
// 5. Array.isArray()