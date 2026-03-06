/* // promise - pending, fullfilled, reject (states)

// Promise - Resolve, Reject (case)

function prepareOrderCB(dish, cb) {
    setTimeout(() => cb(null, { dish, status: "prepared " }), 1000)
}

function pickupOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: "picked-up " }), 1000)
}

function deliveredOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: "delivered " }), 1000)
}
// Callback Hell
prepareOrderCB("Omurice", (err, order) => {
    if (err) return console.log(err);
    pickupOrderCB(order, (err, order) => {
        if (err) return console.log(err);
        deliveredOrderCB(order, (err, order) => {
            if (err) return console.log(err);
            console.log(`${order.dish}: ${order.status}`);
        })
    })
})

// Promises
function prepareOrder(dish) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!dish) {
                reject(new Error("No dish is there"));
                return;
            }
            console.log(`${dish} is ready`);
            res({ dish, status: "prepared" })
        }, 100);
    })
}

function pickUpOrder(order) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`${order} is picked up`);
            res({ ...order, status: "picked up" })
        }, 1000);
    })
}

function deliverOrder(order) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`${order} is delivered`);
            res({ ...order, status: "delivered" })
        }, 2000);
    })
}

prepareOrder("Wine")
    .then(order => pickUpOrder(order))
    .then(order => deliverOrder(order))
    .catch()



 */

/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Spy x Family")
        // reject(new Error("Death Note"))
    }, 1000)
}) */
// console.log(promise);

// setTimeout(() => {
//     console.log(promise);
// }, 2000)

// promise.then(console.log);


/* promise
    .then((data) => {
        const newData = data.toUpperCase();
        return newData
    })
     .then((data) => {
         console.log(data)
         return data
     })
    .then((data) => {
        data = data + " Code: White"
        return data
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

 */



/* const now = Promise.resolve("Fastify");

const allPromises = Promise.allSettled([
    Promise.resolve("Spy"),
    Promise.resolve("X"),
    Promise.resolve("Family"),
    Promise.reject("Code: White"),
])

allPromises.then(console.log)


const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Loid Forger")
        reject(new Error("Yor Forger"))
    }, 2500)
})
// 1.
async function nice() {
    try {
        const result = await newPromise
        console.log(result);
    } catch (error) {
        console.log("Error Occured in Asynchronous code", error.message, " : ", error);
    }
}

nice()
 */


/*
 // 2. 
const anotherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Loid Forger")
    }, 2500)
})
function niceTwo() {
    const result = newPromise.then(console.log)
    return result
}

niceTwo()

// 3. 
const againPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Loid Forger")
    }, 2500)
})
function niceThree() {
    setTimeout(() => {
        console.log(againPromise);
    }, 2500)
}
niceThree() */

/* 
console.log("Spy");
function anime() {
    setTimeout(() => {
    console.log("X");
        
    }, 2000);
    console.log("X");

}
anime()
console.log("Family");
 */


function boilWater(time) {
    return new Promise((resolve, reject) => {
        if (Number.isNaN(time) || time < 0) {
            reject(new Error("Time must be a number or should be greater than 0"))
        }
        console.log("Water boiling...");

        setTimeout(() => {
            resolve("Water boiled!");
        }, time)
    });
};


boilWater(800)
    .then((msg) => console.log("Resolved:", msg))
    .catch((err) => console.log("Rejected:", err.message))


function grindLeaves() {
    return Promise.resolve("Leaves grounded")
}
// grindLeaves()


function sleepTea(time) {
    return new Promise((res) => {
        setTimeout(() => res("Sleeped tea"), time)
    })
}

sleepTea(1200)
    .then(sleepTea)
    .then(console.log)


let x = 5; console.log(x++);
console.log(x);

