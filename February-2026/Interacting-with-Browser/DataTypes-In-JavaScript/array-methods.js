const orders = [
    { product: 'Laptop', quantity: 2, price: 1200, latest: true },
    { product: 'Phone', quantity: 5, price: 800, latest: false },
    { product: 'Tablet', quantity: 3, price: 600, latest: true },
];

orders.forEach((order, index) => {
    console.log(`#${index + 1} : ${order.product} x ${order.quantity}`)
});

orders.map(o =>
    console.log(`${o.product} : ${o.quantity * o.price}`)
);

const latestOrders = orders.filter(o => o.latest)
console.log(latestOrders);


const totalRevenue = orders.reduce((acc, order) => acc + (order.quantity * order.price), 0);
console.log("Total Revenue:", totalRevenue);



const latestProducts = orders.reduce((acc, order) => {

    const category = order.latest ? "latest" : "old";

    acc[category].push(order.product);

    return acc

}, { latest: [], old: [] })

console.log(latestProducts);


const kitchenOrders = [
    { dish: 'Pizza', quantity: 2, price: 15, spicy: true },
    { dish: 'Burger', quantity: 3, price: 10, spicy: false },
    { dish: 'Pasta', quantity: 1, price: 12, spicy: false },
];

const mildOrders = kitchenOrders
    .filter(order => !order.spicy)
    .map((order)=> ({
        dish: order.dish,
        total: order.quantity * order.price
    }))
    .toSorted()

// console.log(mildOrders);.


