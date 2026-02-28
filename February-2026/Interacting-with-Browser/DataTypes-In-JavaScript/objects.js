const hero = {
    name: "Superman",
    class: "Superhero",
    level: 54,
    health: 96,
    mana: 80,
    isAlive: true
};
// hero[]
hero.weapon = "laser"

delete hero.level


const ranger = {
    name: "Loid Forger",
    color: "Green",
    stealth: undefined,
    agility: 65
}

console.log(ranger.hasOwnProperty("stealth"))