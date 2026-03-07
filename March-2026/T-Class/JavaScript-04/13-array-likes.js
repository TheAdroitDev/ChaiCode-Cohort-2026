// obj who has Index, Length

// for e.g. String

const starterPack = {
  0: "Macbook",
  1: "Chai",
  length: 2,
};

// Both iterables and array-likes are usually not arrays, they don’t have push, pop etc.


// ArrayLike --> Array
const array = Array.from(starterPack);
console.log(array);