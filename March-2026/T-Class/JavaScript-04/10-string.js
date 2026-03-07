let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks(string-interpolation)` // `${variable}`

/*
\n, \t, \\, \’, \”
*/

let fancy = "this is \"me\"";
// console.log("5\\2");


let windowsDownfall = `Downfall started from:
  * w8
  * w10
  * w11 AI
  * Copilot
  * noted bug
  * Blue Screen of Death
`

// console.log(windowsDownfall);

// length 
// console.log(windowsDownfall.length);

// Access 
// [] , .at(pos)

// console.log(windowsDownfall[0]);
// console.log(windowsDownfall[windowsDownfall.length - 1]);

// console.log(windowsDownfall.at(-1));

// Interable 
// for..of
for (const char of 'meow') {
  // console.log(char);
}

// Strings are immutable
let str = "Kama";

// 
str = "R" + str.substring(1);
// console.log(str);

console.log(windowsDownfall.trim().length);
