brewPortion('Healing Herbs', 3);
function brewPortion(ingredient, dose) {
    console.log(`Brewing portion with ${ingredient} (x${dose})... portion ready!`);

}

const mixElixir = function (ingredient) {
    return `Mixing elixir with ${ingredient}`;
}
// const mixElixir = (ingredient) => `Mixing elixir with ${ingredient}`


// no own 'this', no `arguments` object
const distilEssence = (ingredient) => {
    return console.log(`Fusing elixir with ${ingredient}`);

}

function oldBrewingLogs() {
    console.log("Type:", typeof arguments);
    console.log("Is Array: ", Array.isArray(arguments));
    const argsArray = Array.from(arguments)
    console.log(argsArray);

}
oldBrewingLogs("Sage", "Rosemary");


const arrowBrew = () => {
    try {
        console.log(arguments);
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }

}

let globalCount = 0;


function brewAndCount(name) {
    globalCount++;
}

// Higher order functions 
// A function that takes other function in arguments(callbacks) or returns a function

function portionReady(brewAndCount) {
    return function (healthPoints) {

    }
}


// IIFE 
// (function name() {}) ()

const portionShop = (function () {
    let inventory = 0;

    return {
        brew() {
            inventory++
            return `Brew portion #${inventory}`;
        },
        getStock() {
            return inventory;
        }
    }
})()

console.log(portionShop);
console.log(portionShop.brew())
console.log(portionShop.inventory)


/* const potionShop = function () {
    let inventory = 0;

    return {
        brew() {
            inventory++
            return console.log(`Brew portion #${inventory}`);
        },
        getStock() {
            return inventory;
        }
    }
}

console.log(potionShop);
console.log(potionShop.brew)
console.log(potionShop.inventory) */


function makeFun() {
    const name = "giveWeapon";

    function displayName() {
        console.log(name);
    }
    return displayName
}
const myFun = makeFun()
myFun()
