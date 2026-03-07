// It all comes at cost....
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
