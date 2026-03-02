console.log(this);

function ranveerOnGlobalStage() {

    return typeof this
}

console.log(ranveerOnGlobalStage());

function ranveerWithNoScript() {
    // "use strict"
    return this
}
console.log(ranveerWithNoScript());

const bollywoodFilm = {
    name: "Bajirao Mastani",
    lead: "Ranveer",

    introduce() {
        return `${this.lead} performs in ${this.name}`
    }
}
console.log(bollywoodFilm.introduce());


// hotstar special i question

const filmDirector = {
    name: "Spy x Family: Code White",
    cast: ["Loid Forger", "Yor Forger", "Anya Forger"],

    announceCast() {
        this.cast.forEach((actor) => {
            // Detached function
            console.log(`${this.name} introduces => ${actor}`);
        })
    },
}

filmDirector.announceCast()

const filmSet = {
    crew: "Spot boys",
    prepareProps() {

        console.log(`Outer this.crew ${this.crew}`);
        // Irregular nested function
        function arrangeChairs() {
            console.log(`Inner this.crew ${this.crew}`);
        }
        arrangeChairs()

        const arrangeLights = () => {
            console.log(`Arrow this.crew ${this.crew}`);

        };
        arrangeLights()
    },
}
/* filmSet.prepareProps()
   |
   |-- this = filmSet
   |
   |-- arrangeChairs()
   |       |
   |       |-- new function call → new this (global/undefined)
   |
   |-- arrangeLights (arrow)
           |
           |-- no new this
           |-- borrows prepareProps's this

      */
filmSet.prepareProps()


// Detached Methods
const actor = {
    name: "Loid Forger",
    bow() {
        return `${this.name} takes a bow`
    }
}
const detachedBow = actor.bow;
console.log(detachedBow());


// Key points
// Detached methods: it does not holds the value of this because it's only pass by reference eg: not a deep copy;
// However, we can still access this in closure function becuase it inherits the value even after the completion of the function
// This is the behaviour of `this`. In other words it's just a pointer
// + `this` is determines by in which enviornment we are talking about


const myFunctionOne = function(){
    console.log(this);
}

const myFunctionTwo = () => {
    console.log(this);
}

myFunctionOne()
myFunctionTwo()

// last but not the least - this depends on where we are running it(enviornment)