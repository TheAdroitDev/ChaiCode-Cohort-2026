/* 
     // promise - pending, fullfilled, reject (states)

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


/* function boilWater(time) {
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
console.log(x); */









const anotherArr = [1, 2, 3, 4, 5, 6]
//shallow copy

/* let person1 = {
    firstName: "Shivam",
    lastName: "Verma",
    address: {
        houseNo: 528
    },
}
    
let person2 = {
    ...person1,
}

person2.firstName = "Piyush"
person2.lastName = "Garg"
person2.address.houseNo = 232

console.log("person-2", person2);
console.log("person-1", person1); */



//deep copy

/* let person1 = {
    firstName: "Shivam",
    lastName: "Verma",
    address: {
        houseNo: 528
    },
}

const person1kaString = JSON.stringify(person1)
let person2 = JSON.parse(person1kaString);

person2.firstName = "Piyush"
person2.lastName = "Garg"
person2.address.houseNo = 232

console.log("person-2", person2);
console.log("person-1", person1);
 */



/* let obj = { 
    name: "John", 
    age: 30,
    'be happy': function(){
          return "be happy"
    },
        address:{
          zipcode: 107008,
            houseNo:528-11
    }
};
console.log(obj["be happy"]()); // be happy
console.log(obj.address); // be happy
 */

/* 
var myArray = [1, "Hello", [2, 3]];
myArray.unshift("World");
console.log(myArray); // [1, "Hello", [2, 3], */
//  "World"]

// let posts = ['post1','post2','post3'];

// posts.filter()
// console.log(posts)


/* 
let users = [
    { name: "Shivam", active: true },
    { name: "Bhaskar", active: false },
    { name: "Som", active: true }
];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers); */
// [{ name: "Shivam", active: true }, { name: "Som", active: true }]



/* function GradeCalc(grade) {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80) {
        return 'B'
    }
    else if (grade >= 70) {
        return 'C'
    }
    else if (grade >= 60) {
        return 'D'
    }
    else{
        return 'Superman Fail'
    }
}

let grade = GradeCalc(93);
console.log(grade); */


/* 
let numberofGuest = 4;

let pizzaSize;
if(numberofGuest <= 2){
    pizzaSize = "Small";
} else if (numberofGuest <=5) {
    
    pizzaSize = "Medium";
}
else {
    
    pizzaSize = "Large";
}
console.log(pizzaSize);
*/


/* // const num = 10;

switch (true) {
  case num < 0:
    console.log("Negative number");
    break;
  case num === 0:
    console.log("Zero");
    break;
  case num > 0:
    console.log("Positive number");
    break;
} */

/* 
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

        default:
            return "Invalid Operator"
    }
}
console.log(calculator(2832, 12, "/"));  

function countApples(apples) {
    let count = 0;

    while (apples > 0) {
        count++;
        apples--; // Decrease the number of apples each time we count one
    }

    return count;
} */


/* function countMovies(movieList) {
    // Return the number of movies in the movieList
   let count =  movieList.length
    return count
}
console.log(countMovies(["sjsj","sjsj"])) */



/* function handleChoice(choice) {
    switch (choice) {
      case 1:
        return "You chose option 1";
      case 2:
        return "You chose option 2";
      Default:
        return "Invalid choice";
    }
  }
console.log(handleChoice(3))   */




/* let teas = {
    name: "Oolong tea",
    type: "brown",
    caffeine: "low"
}


console.log(teas.name)
console.log(teas.type)

teas.origin = "Assam";

teas.caffeine = "Medium"

console.log(teas.caffeine)

delete teas.type;

console.log(teas);

console.log('origin' in teas);

for (let key in teas) {
    console.log(key + ":" + teas[key]);

}

const myteas = {
    greentea: {
        name: "Green tea"
    },
    blacktea: {
        name: "Black tea"
    }
};
console.log(myteas);


const teaCopy = {
    ...teas
}
console.log(teaCopy);


//

const string = "Shivam "
console.log(string.length)

const newArr = [1, 2, 3];
console.log(newArr.__proto__);


//Polyfill function

//polyfill reduce
let arr = [1, 2, 3, 4]
if (!Array.prototype.myreduce) {
    Array.prototype.myreduce = function (userFn, initial_value) { //userFn is any callback function
        let acc;
        let startIndex = 0; //sets start index to 0

        if (initial_value !== undefined){ //if current array is non-empty
            acc = initial_value; //assign initial value of arr to acc
        }
        else {
            if (this.length === 0) { //throws an error is arr is empty
                throw new TypeError("Reduce of empty array with no initial value")
            }
        acc = this[0]
        startIndex = 1
        }
        for (let i=startIndex; i<this.length; i++) {
            acc = userFn(acc, this[i], i, this) // Here, userFn will get replaced by the called function
        }
        return acc
    }
}
const sum = arr.myreduce((acc, curr, i, arr) => { return acc + curr }, 0)
console.log(sum)


if (!Array.prototype.fill) {
    //fallback
    Array.prototype.fill = function () {
    }
}
newArr.fill();

const arr = [1, 2, 3, 4];
arr.forEach((num) => {
    console.log(`Number:${num}`);
});

//signature of push - return new lenght of array - add value at the end
if (!Array.prototype.mypush) {
    Array.prototype.mypush = function () {
        let length = this.length;
        for (let i = 0; i < arguments.length; i++) {
            this[length] = arguments[i];
            length++;
        }
        return length;
    }
}


//Our for...each polyfill
if (!Array.prototype.myForEach) {   `
    Array.prototype.myForEach = function (userFn) {
        const originalArray = this;
        console.log(typeof (this), "and it's value is", this);
        for (let i = 0; i < originalArray.length; i++) {
            userFn(originalArray[i], i);
        }
    }
}

const anotherArr = [1, 2, 3, 4, 5, 6]
const returnSomething = anotherArr.myForEach(function (value, index) {
    console.log(`Using My For Each and the Value at index:${index} is ${value}`);

})
console.log(`Function is Returning ${returnSomething}`);

//map 
//signature - return modified array - don't modify original array
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i);
            result.mypush(value)
        }
        return result;
    }
}

//filter
//signature = - return new array - input: userfn
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (userFn(this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    }
}


console.log("map", anotherArr.map((v) => v * 2));
console.log("original array", anotherArr);
console.log("mymap", anotherArr.myMap((v) => v * 3));
console.log("original array", anotherArr);

console.log("mypush", anotherArr.mypush(7, 8, 9));
console.log("original array", anotherArr);

console.log("myfilter", anotherArr.myFilter((e) => e % 3 == 0));
console.log("original Array",anotherArr);

*/

/* const obj1 = {
    fname: 'Shivam',
    lname: "Verma",
    fullname: function () {
        return `${this.fname} ${this.lname}`
    }
}
const obj2 = {
    fname: 'Maya',
    lname: "Sura"
} */

//NOTE: This part is not recommended
// obj2.__proto__ = obj1;
// obj1.__proto__ = null;

// console.log(obj1.fullname());
// console.log(obj2.fullname());
// console.log(obj2.toString());

/* class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    getFullname() {
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person("Shivam", "Verma");
const p2 = new Person("Piyush", "Garg");


console.log('person1:',p1.getFullname());
console.log('person2:',p2.getFullname()); */

// const num = 1;
// num.pop()


/* function calculate(amount) {
    Number(amount)
    if (amount > 1000) {
        return console.log('Discount hai jii', amount * 0.9);
    }
}
console.log(calculate(3478)); */


// num.reduce()

//

/* greet(); // 

function greet() {
  console.log("Hello!");
} */


/* let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTasks);

let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
  ]; */

// let averageRating = movieRatings.map((movie)=>{

// })

/* let person1 = {
    name:"Shivam",
    greet:function(){
        console.log(`Helo ${this.name}`);
    }
}

let person2 = {
    name:"hitesh",
}
console.log(person1.greet.call(person2));
 */

/* let person1 = {
    personName: "Shivam",
    greet: function(){
        console.log(`Hello!,${this.personName}`);
    }
}
person1.greet();
let person2 = {
    personName:"shivam",
}
person1.greet.call({personName:"Mukul"}) */

//reduce
/* let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales); */


// with a regular loop
/* let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
];

function getSales(prod,rp){
    let totalSales = 0;
    for(let item of salesData){
        if (item.product === prod) {
            totalSales += item.price * rp;
        }
    }
    return totalSales
}
console.log(getSales("Laptop", 2));   */
// or

/* let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
];

function getSales(rp){
    let totalSales = 0;
    for(let item of salesData){
            totalSales += item.price * rp;
    }
    return totalSales
}
console.log(getSales(2));  */

/* let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 1 },
    { name: "Widget B", stock: 11 },
    { name: "Widget B", stock: 192 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
    return item.stock < 50
})
console.log(lowStockItems);


let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 12 },
    { user: "Charlie", activityCount: 33 },
];

let mostActiveUser = userActivity.reduce((initialUser, SecondaryUser) => {
    return SecondaryUser.activityCount > initialUser.activityCount ? SecondaryUser : initialUser
})
console.log(mostActiveUser); */


/* - Debouncing: Delays a function call until a pause in actions
- Delaying: Runs a function after a set time
- Throttling: Limits a function call to a fixed rate
 Note: Proxies do not work with primitive types (string, number, boolean) directly since they are immutable; they must be wrapped in an object
*/

//

/* let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
];
let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
}, { Food: 0, Utilities: 0 })
console.log('Expense Report', expenseReport);


let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
];
let pendingTasks = tasks.
    filter((task) => {
        return (!task.completed == true)
    })
    .sort((a, b) => a.priority - b.priority)
console.log("pending task", pendingTasks);


let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
];
console.log('Movie Ratings', movieRatings);
let averageRatings = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
    let average = total / movie.ratings.length
    movie.ratings = average;
    return [{ title: movie.title, ratings: average.toFixed(2) }];
});
console.log("Average Ratings of the movies", averageRatings);


//prototypes
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getName() {
        return `${this.make} ${this.model}`;
    }
}

const fordInstance = new Car('Ford', 'Mustang');

console.log(fordInstance.getName()); 

console.log({}.__proto__ === {}.prototype);  */


//

/* const Member1 = {
    codeName: "Twilight",
    identification: "Loid Forger, A Psychiatrist",
    work: function () {
        return this.codeName + " A Spy"
    },
};

const Member2 = {
    codeName: "FullMetal Lady",
    identification: "WISE Commanding Officer",
};


Member2.__proto__ = Member1;
// Member1.__proto__ = null;
console.log(Member2.work()); */


// dom
/* Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function greet(name){
    return `Hello ${name}`
}
greet.describe(); */


// 
// You just need to implement the mergeObjects function
/* function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    if (!obj2) {
        return obj1;
    }
    else if (!obj1 && !obj2) {
        return {}
    }
    else {
        return { ...obj1, ...obj2 }
    }
}


// You just need to implement the objectToArray function
function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    if (!obj) {
        return [];
    }
    else {
        return Object.entries(obj)
    }
}

// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    for (let key in obj) {
        if (obj[key] === null || typeof obj !== "object" || obj[key] === "undefined") {
            delete obj[key]
        }
    }
    return obj;
}
// You just need to implement the deepClone function
function deepClone(obj) {
    // Return a deep copy of obj

}

function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj;
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = deepClone(obj1);

// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    let keys = keyPath.split(".");
    let currenObj = obj;

    for(let key of keys){
        if(typeof currenObj[key] === undefined){
            return "Key not found"
        }
        else{
            currenObj = currenObj[key]
        }
    }
  } */


//js behind the scenes

/* const obj = {
    name: "Shivam",
    greet: function () {
        console.log(`Hello ${this.name}`);

    }
}

setTimeout(obj.greet.bind(obj), 1000);

console.log('HI');

setTimeout(() => {
    console.log('Hello after 2s');

}, 2000);

Promise.resolve().then(() => { console.log(`Promise resolve hogaya`) }) */

// negative indexing
/* const user = {
    name: "Shivam Verma",
    age: 16,
    password: "123"
}
const proxyUser = new Proxy(user, {
    get(target, prop) {
        if (prop === "password") {
            throw new Error("access denied")
        }
        return target[prop]
    },
    set(target, prop, value) {}
})

console.log(proxyUser.password);

function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);
            if (index < 0) {
                return target[target.length + index]
            }
            return target[index]
        },
        set(target, prop, value) {
            const index = Number(prop);
            if (index < 0) {
                return target[target.length + index] = value
            } else {
                target[index] = value
            }
            return true
        }
    })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = negativeIndex(arr)
console.log(arr[-1]);
console.log(newArr[-1]); */

// noterity
/* function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first(); */

/* console.log('I am first');
setTimeout(() => console.log('I am the time'), 0)
console.log('bye bye!') */

// promises
// legacy code 1. read content  2. backup file 3. del old file [callback hell]
/* const fs = require('fs');
const fsv2 = require('fs/promises'); */
/*fs.readFile('./hello.txt', 'utf-8', function (err, content) {
    if (err) {
        console.log('Error occured while reading file', err);
    } else {
        console.log('File reading Sucesss', content);
        fs.writeFile('backup.txt', content, function (err) {
            if (err) {
                console.log('Error while creating backup', err);
            } else {
                fs.unlink('./hello.txt', function (e) {
                    if (e) {
                        console.log('Error in deleting');
                    }
                    else {
                        console.log('File delete success');
                    }
                })
            }
        })
    }
}); */

// modren code
/* fsv2
    .readFile('./hello.txt', 'utf-8')
    .then((content) => fsv2.writeFile('backup.txt', content))
    .then(() => fsv2.unlink('./hello.txt'))
    .catch((e) => console.log('Error', e)); */

// custom promisified version
// 1. readFileWithPromise
/* function readFileWithPromise(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(content)
            }
        });
    });
};
// 2. writeFile
function writeFileWithPromise(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve(content)
            }
        })
    })
}
// 3. delete file
function unlinkFileWithPromise(filepath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, function (e) {
            if (e) {
                reject(e)
            }
            else {
                resolve();
            }
        })
    })
}
readFileWithPromise('./hello.txt', 'utf-8')
    .then((content) => writeFileWithPromise('./backup.txt', content))
    .then(() => unlinkFileWithPromise('./hello.txt'))
    .catch((e) => console.log('error hai ji!', e))
    .finally(() => console.log('all done'))
const fileContent = await readFileWithPromise('./hello.txt', 'utf-8') */

/* async function registerUser() {
    // await getDataFromServer();
    //
} */

//polyfills practice
// myForEach2 signature - returns nothing - callback - c,i
/* if (!Array.prototype.myForEach2) {
    Array.prototype.myForEach2 = function (userfn) {
        for (let i = 0; i < this.length; i++) {
            userfn(this[i], i)
        };
    };
};
console.log(`original array`, anotherArr);
anotherArr.myForEach2((value, i) => {
    console.log(`At current index ${i} Value is ${value}`);
})

// mymap2
if (!Array.prototype.myMap2) {
    Array.prototype.myMap2 = function (cb) {
        const result = []
        for (let i = 0; i < this.length; i++) {
            const value = cb(this[i], i);
            result.push(value)
        }
        return result;
    };
};
const mappedArray = anotherArr.myMap2((e) => e * 2)
console.log(`original array`, anotherArr);
console.log(`My mapArray`, mappedArray);

// myreduce2
if (!Array.prototype.myreduce2) {
    Array.prototype.myreduce2 = function (cb, initial_value = undefined) {
        let acc = initial_value ?? this[0]
        let startIndex = initial_value ? 0 : 1

        for (let i = startIndex; i < this.length; i++) {
            acc = cb(acc, this[i])
        }
        return acc
    }
}
const arr = [1, 2, 3]
if (!Array.prototype.myForEach3) {
    Array.prototype.myForEach3 = function (cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i)
        };
    };
};
console.log(`original array:`, arr);
arr.myForEach3((value, i) => {
    console.log(`At current index ${i} Value is ${value}`);
})

//mymap3
if (!Array.prototype.mymap3) {
    Array.prototype.mymap3 = function (cb) {
        let result = []
        for (let i = 0; i < this.length; i++) {
            const value = cb(this[i], i)
            result.push(value)
        }
        return result;
    }
}
console.log(arr.mymap3((e) => e * 0));
// myReduce3
if (!Array.prototype.myReduce3) {
    Array.prototype.myReduce3 = function (userfn, initial_value = undefined) {
        let acc = initial_value ?? this[0];
        let startIndex = initial_value ? 0 : 1;
        for (let i = startIndex; i < this.length; i++) {
            acc = userfn(acc, this[i]);
        }
        return acc;
    };
};
console.log(arr.myReduce3((acc, i) => acc * i));

// polyforPromise
class MyPromise {
    constructor(executorFn) {
        this._state = 'pending';
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finallyCallbacks = [];
        this.value_state = undefined;
        executorFn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        )
    }
    then(cb) {
        if (this._state = "fulfilled") {
            cb(this.value_state)
            return this;
        }
        this._successCallbacks.push(cb);
        return this;
    }
    catch(cb) {
        if (this._state = "rejected") {
            cb(this.value_state)
            return this;
        }
        this._errorCallbacks.push(cb);
        return this;
    }
    finally(cb) {
        if (this._state !== "pending") {
            cb(this.value_state)
            return this;
        }
        this._finallyCallbacks.push(cb);
        return this;
    }
    resolverFunction(value) {
        this.value_state = value
        this._state = 'fulfilled'
        this._successCallbacks.forEach((cb) => cb(value));
        this._finallyCallbacks.forEach((cb) => cb());
    }
    rejectorFunction(err) {
        this.value_state = err
        this._state = 'rejected'
        this._errorCallbacks.forEach((cb) => cb(err));
        this._finallyCallbacks.forEach((cb) => cb());
    }
}
function wait(seconds) {
    const p = new MyPromise((resolve, reject) => {
        resolve('jiji')
    });
    return p;
}

const p = wait(2);
p.then((e) => console.log(`Promise Resolved After 2 sec...`, e))
    .catch((e) => console.log(`Rejected after 2 sec!!!`, e))
    .finally(() => console.log('I will run every time! becuase i am finally!')) */


// debounce & closure ^ tiffin concept
// debounce
/* function ptaNhi(fn, seconds) {
    let myId;
    return function (...arguments) {
        clearTimeout(myId);
        myId = setTimeout(() => {
            fn.call(this, arguments)
        }, seconds)
    };
}
function greet(name) {
    console.log(`Hello There!,${name}`);
}
ptaNhi(greet("Shivam"), 1);
//throttling
function ptaNhi2(fn, delay) {
    let myId = null;
    return (...args) => {
        if (myId === null) {
            fn(...args);
            myId = setTimeout(() => {
                myId = null
            }, delay);
        }
    }
} */


// lexical scoping and closure functions
/* let fname = "Shivam"
function sayName() {
    let lname = "Verma"
    console.log('=>', fname, lname);
}
console.log(fname);
sayName();
// Lexical Scope in JavaScript is a convention that determines how variables are accessed in a block of code. It's also known as static scoping 
// closure // [memory leak (hack = null)]
function createCounter() {
    let count = 0
    return function () {
        count++
        return count
    }
}
let x = createCounter();
let y = createCounter();
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(y());
console.log(x());
 */

// newMap
/* function getColor(value) {
    const colorMap = new Map([['twilight','#ff0000'],['loid','#708775']]);
    return colorMap.get(value) ?? '#3343'
}
console.log(getColor()) */


class MyPromise {
    constructor(executorFn) {
        this._state = 'pending';
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finallyCallbacks = [];
        this.value_state = undefined;
        executorFn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        )
    }
    then(cb) {
        if (this._state = "fulfilled") {
            cb(this.value_state)
            return this;
        }
        this._successCallbacks.push(cb);
        return this;
    }
    catch(cb) {
        if (this._state = "rejected") {
            cb(this.value_state)
            return this;
        }
        this._errorCallbacks.push(cb);
        return this;
    }
    finally(cb) {
        if (this._state !== "pending") {
            cb(this.value_state)
            return this;
        }
        this._finallyCallbacks.push(cb);
        return this;
    }
    resolverFunction(value) {
        this.value_state = value
        this._state = 'fulfilled'
        this._successCallbacks.forEach((cb) => cb(value));
        this._finallyCallbacks.forEach((cb) => cb());
    }
    rejectorFunction(err) {
        this.value_state = err
        this._state = 'rejected'
        this._errorCallbacks.forEach((cb) => cb(err));
        this._finallyCallbacks.forEach((cb) => cb());
    }
}




function fn() {}
const sample = new fn()
console.log(sample.__proto__)
console.log(sample.prototype)

function fn(){
    
}

console.log(fn.prototype)

let num1 = 2
let num2 = 3

console.log(num2 / num1) // -1