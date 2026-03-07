// Conversion ==> number, string

// obj[Symbol.toPrimitive](hint)

// hint --> "string", "number", "default"
// binary + (addition, concatination)

let galgota = {
  status: "wasted",
  aura: -1000,

  // custom conversion
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return this.status;

    return this.aura;
  },
};

console.log(galgota);
console.log(String(galgota));
console.log(Number(galgota));

// hint : "string" --> toString()
// hint : "number" --> valueOf()

function randNo(start, end) {
  return start + Math.random() * (end - start);

  // 0- 1 *diff ==> [0 , 5)
  // 5 + ==> [5 , 10)
}

let user = {
  name: "Vidya",
  age: 23,
  roles: {
    isInstructor: false,
    isEditor: true,
    isDesigner: true,
  },
};

const serilalize = JSON.stringify(user, null, 2);

console.log(JSON.parse(serilalize));