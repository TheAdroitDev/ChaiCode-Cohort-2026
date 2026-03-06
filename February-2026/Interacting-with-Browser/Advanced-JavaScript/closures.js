function startCompany() {
    function ca(name) {
        return `Name of your company is ${name}`
    }
    return ca
}
const getMeACompany = startCompany()

console.log(getMeACompany("XEO"));

// closure is created everytime a function is created.
// So it checks and finds if a function needs a reference(dependent) it takes the reference too with itself
// [[SCOPE]] i.e. private refernce itself of a function
// Closure or Clove :)

/* function makeFun() {
    const name = "giveWeapon";

    function displayName() {
        console.log(name);
    }
    return displayName
}
const myFun = makeFun()
myFun() */



function eternal(guest) {
    let guestName = guest
    let count = 0
    function zomato() {
        console.log(`Hi, ${guestName} from Zomato`);
    }

    function blinkit() {
        if (count === 0) return
        console.log(`Hi, ${guestName} from Blinkit`);
    }

    return {
        zomato,
        blinkit
    }
}

const loid = eternal("Loid Forger")
const anya = eternal("Anya Forger")

loid.zomato()
loid.blinkit()
loid.blinkit()

