const aadhaar_of_shivam = Symbol("aadhaar")
const aadhaar_of_loid = Symbol("aadhaar")

console.log(typeof aadhaar_of_shivam);
console.log(aadhaar_of_shivam === aadhaar_of_loid);
console.log(aadhaar_of_shivam.toString());
console.log(aadhaar_of_shivam.description);

const nonIndian = Symbol()
console.log(nonIndian.description);


const biometricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");

const citizenRecord = {
    name: "Franky Franklin",
    age: 21,
    [biometricHash]: "a7yknfky788dn",
    [bloodGroup]: "O+",
};


console.log(Object.keys(citizenRecord));

console.log(Object.getOwnPropertySymbols(citizenRecord));


const rtiQueryBook = {
    queries: ["Infra budget", "Ration Card", "Education budget", "Startup laws"],
    [Symbol.iterator]() {
        let index = 0;

        const queries = this.queries;
        return {
            next() {
                if (index < queries.length) {
                    return { value: queries[index++], done: false }
                }
                return { value: undefined, done: true }
            },
        };
    },
};

for (const query of rtiQueryBook) {
  console.log(`Filing RTI: ${query}`);
}


const governmentScheme = {
  name: "PM Kisan Yojna",
  people: 54,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return this.name;
    if (hint === "number") return 88;
  },
};

console.log(+governmentScheme);
console.log(`${governmentScheme}`);
