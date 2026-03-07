// key -> Obj

// JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.

// using Map I can set key as obj
// using set i can store obj as value

// jb obj gayab mai bhi delete karuga key ko
const bounties = new WeakMap();

let first = {name: "Windows"};
let second = {name: "Aryan - Mac"};

bounties.set(first, "5000");
bounties.set(second, "3000");

first = null;
// console.log(bounties.has(first));

/*
  - `WeakMap` has only the following methods:
    - `weakMap.set(key, value)`
    - `weakMap.get(key)`
    - `weakMap.delete(key)`
    - `weakMap.has(key)`
*/

// weakset --> value obj hogi toh after garbage collection gayab hogi
const gc = [
  {text: "Hello Team, Let's plan Vacation", from: "Hitesh"},
  {text: "Yoo I'm in! When?", from: "AK"},
  {text: "This Holi", from: "Ani"},
  {text: "Can I bring my girlfriend?", from: "Piyush"},
];


const unreadForVidya = new WeakSet(gc);
// console.log(unreadForVidya);

// Piyush Panics and Deletes his msg
gc.pop();
// console.log(gc);

console.log(unreadForVidya.has(gc[3]));