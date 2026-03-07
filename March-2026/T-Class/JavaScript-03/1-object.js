// objects --> Properties --> key:value

// Two ways
let gemini = new Object(); // Object Constructor Syntax
let claude = {}; // Object Literal

let gpt = {
  company: "openai", // name : value
  version: 5.3,
  releaseYear: 2025,
};

// console.log(gpt.company);

// add new property
gpt.type = "Large Language Model";

// can be any type
gpt.isMultiModal = true;

// Modify
gpt.type = "LLM";

// remove
delete gpt.type;

// console.log(gpt);

let sonnet = {
  company: "anthropic", // name : value
  version: 4.6,
  "released on": 2026, // mutiword prop must be quoted
  1: "claude hi hai",
};

// Trailing Comma

// Square Bracket Notion
// console.log(sonnet["released on"]);
// console.log(sonnet[1]);

// expression value as prop names
const input = "company";
// console.log(sonnet[input]);

// Property Shorthand
function getLaptop(name, price) {
  //params
  // console.log("yu hu");
  return {
    brand: "Apple",
    name,
    price,
  };
}

let myMac = getLaptop("M4 Air", 99_900); // args
// console.log(myMac);

// Search a property
// console.log(myMac.ram === undefined);
// console.log("ram" in myMac);  // key in object (boolean)

// Looping Object  for..in
// for (let key in myMac) {
//   console.log(key);
//   console.log(myMac[key]);
// }

// Objects are ordered in diff fashion
// Integer properties are sorted, others appear in creation order.
let codes = {
  // Asia
  "+7": "Russia",
  "+32": "Belgium",
  "+91": "India",

  // North America
  "+1": "Canada",
  "+52": "Mexico",
};

// for (const code in codes) {
//   console.log(code);
// }

// Ref and Copying

// Primitives are always copied "as a value"
let like = "Radhika Das";
let love = like; //  "Radhika Das"

// console.log(love);

like = "Taylor Swift";
// console.log(love);

// objects are stored and copied “by reference”.
let artist = {
  name: "Radhika Das",
  county: "UK",
};

let kirtaniya = artist;

artist.county = "England";
// console.log(kirtaniya);

// store by ref
let a = {};
let b = {};

// console.log(a === b);

// Const can't be modified then how we modify obj
const ev = {
  name: "Mahindra be6",
};

ev.name = "BYD Seal";
// console.log(ev);

// Clone [kyu = they copy a ref]

const original = {
  k1: "v1",
  k2: "v2",
};

// let clone = {}
// for (let key in original) {
//   clone[key] = original[key];
// }

// console.log(clone);

// Object.assign(dest, ...sources)
let clone = Object.assign({}, original);
// console.log(clone);

// nested obj
const nestedObj = {
  model: "gpt",
  version: "5.3",
  capabilities: {
    reasoning: true,
    codeGeneration: true,
    imageUnderstanding: true,
    toolUse: true,
    functionCalling: true,
    streaming: true,
  },
};

// Deep Cloning
const nestedClone = structuredClone(nestedObj);
nestedObj.version = 5.2
console.log(nestedClone);

