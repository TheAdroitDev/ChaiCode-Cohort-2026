const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish() {
        return `${this.name} cooks an ancient family receipe`
    }
}
const raj = Object.create(prithviraj)

console.log(raj);
console.log(raj.cookTraditionalDish());
// const Raviraj = {...prithviraj}
// console.log(Raviraj.cookTraditionalDish());

raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function () {
    return `${this.name} runs the family business`;
};
console.log(raj);

const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
    return `${this.name} directs blockbustur movies`;
};

console.log(ranbir.makeFilm());
console.log(ranbir.runBusiness());
console.log(ranbir.cookTraditionalDish());

console.log(Array.isArray ? "true": "false");
// Prototypes
