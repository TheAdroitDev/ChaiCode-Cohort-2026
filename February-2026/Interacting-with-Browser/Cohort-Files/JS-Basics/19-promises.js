// pending, done(fulfil, resolve), nope(not, reject, nako)
//
/*
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Chaicode");
    rej(new Error("Chaicode"));
  }, 2000);
});
console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

promise
  .then((data) => {
    newData = data.toUpperCase();
    return newData;
  })
  .then((data) => {
    return data + ".com";
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
    return "Chai";
  })
  .then(console.log);
  */

const turant = Promise.resolve("Turant");
console.log(turant);

const allPromise = Promise.allSettled([
  Promise.resolve("Chai"),
  Promise.resolve("Code"),
  Promise.reject("Error"),
]);

// allPromise.then(console.log);

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Masterji");
    rej(new Error("Masterji"));
  }, 3000);
});

async function nice() {
  try {
    const result = await hPromise;
    console.log(result);
  } catch (error) {
    console.log("Error aa gya ji", error.message);
  }
}

nice();
