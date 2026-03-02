function TataCar(chassisNumber, modelName) {
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}


// `new` keyword steps breakdown: 
// 1. When we use "new" it creates an empty object {} in the memory. 
// 2. Meanwhile, linking it's prototype to the function's instace prototype.
// 3. After that it goes throught the process of the 'this binding' i.e. transfering all the references(arguments) to the current `this`
// 4. In the end, it returns the object



TataCar.prototype.status = function () {
    return `Tata #${this.chassisNumber}, ${this.modelName} | ${this.fuelLevel}`
}

const car1 = new TataCar("UP-B84", "Harrier")
const car2 = new TataCar("PB-108J", "Sira")

// console.log(car1.modelName);
// console.log(car2.modelName);
console.log(car1.status());
console.log(car2.status());


// FactoryFunctions
// --------------------- 
function createAutoRickShaw(id, route) {
    return {
        id,
        route,
        run() {
            return `Auto #${this.id} running on: ${this.route}`
        }
    }
}

const auto1 = createAutoRickShaw("UAD-1", "Lucknow-Kanpur")
const auto2 = createAutoRickShaw("UTC-2", "Agra-Mathura")

console.log(auto1.run());
console.log(auto2.run());
