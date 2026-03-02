// call and apply => basic chef (kitchen)
// bind => return a new function
//
//
//

function cookDish(ingredient, style) {
    return `${this.name} prepares ${ingredient} in ${style} style !`
}
console.log(cookDish());

const sharmaKitchen = { name: "Sharma jis kitchen" }
const guptaKitchen = { name: "Gupta jis kitchen" }


console.log(cookDish.call(sharmaKitchen, "Paneer and spices", "Muglai"));

const guptaOrder = ["Omurice", "Hot chocolate/cocoa with milk"]

console.log(cookDish.apply(guptaKitchen, guptaOrder));


const bills = [100, 383, 393, 2845, 83, 9048, 37, 571, 973, 1];

console.log(bills.sort((a, b) => a - b));

Math.max.apply(null, bills)
Math.min(...bills)

// while `apply` and `call` returns result but bind returns a function

function reportDelivery(location, status) {
    console.log(`${this.name} at ${location}: # ${status}`);
}

const deliveryBoy = {
    name: "Ranveer",
};

console.log(`Call: , ${reportDelivery.call(deliveryBoy, "Forgers", "Arriving")}`);
console.log(`Apply: , ${reportDelivery.apply(deliveryBoy, ["Mussorie", "Ordered"])}`);
console.log(`Bind: , ${reportDelivery.bind(deliveryBoy)}`);

const bindReport = reportDelivery.bind(deliveryBoy)
console.log(bindReport("Mars", "Out-For-Delivery"));


