/* // It all comes at cost....
// Objects are heavier than primitives

let str = "akCool";

let strClean = str.toLowerCase();
// in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toLowerCase()
// {
//   value: "akCool",
//   toLowerCase() ,
// }

console.log(strClean);

// String, Number, Boolean, Symbol and BigInt.

let million = 1_000_000;

// e2 --> 100
let lakh = 1e5;
let cr = 4e7;

// e-2 -> 10^-2
let dAtom = 5e-10;
let dNucleus = 1e-15;

// Hexa (white -> ffffff -> RGB (255,255,255))
console.log(0xff);  

// Binary 
console.log(0o111); // 111 ->  4+2+1 ==> 7

// Octal
console.log(0o13);

// toString
const number = 11;
console.log(number.toString(16));

 */

let single = 'single quoted';
let double = "double quoted";

let backTicks = `This is also known as ${double} interpolation`

