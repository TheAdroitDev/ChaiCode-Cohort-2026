function prepareOrderCB(dish, cb) {
  setTimeout(() => cb(null, { dish, status: "prepared" }), 100)
}
function pickupOrderCB(dish, cb) {
  setTimeout(() => cb(null, { ...dish, status: "picked-up" }), 100)
}
function deliverOrderCB(dish, cb) {
  setTimeout(() => cb(null, { ...dish, status: "delivered" }), 100)
}


prepareOrderCB("Biryani", (err, order) => {
  if (err) return console.log(err);
  pickupOrderCB(order, (err, order) => {
    if (err) return console.log(err);
    deliverOrderCB(order, (err, order) => {
      if (err) return console.log(err);
      console.log(`${order.dish}: ${order.status}`);
    });
  });
});

// If you don't want to return a value explicitly but params are more than 1, you can use parenthesis `()` to bind more than one agruments(params/callbacks). 


// promises
const promise = new Promise((resolve,reject)=>{
  return resolve("done")
})
const promise2 = new Promise(()=>{
})

// console.log(promise);
// console.log(promise2);
const promise3  = new Promise((res,rej)=>{
  setTimeout(()=>{
    res("Promise resolved after 2 seconds")
  },2000)
})
