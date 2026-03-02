class Cricketer {
    constructor(name, role) {
        this.name = name
        this.role = role
        this.matchesPlayed = 0
        this.stamina = 100
    }

    introduce() {
        return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | stamina: ${this.stamina}`
    }
};


const player1 = new Cricketer("Yor Forger", "Batsman")
const player2 = new Cricketer("Fiona Frost", "Bowler")

console.log(player1.hasOwnProperty("name"));
console.log(typeof Cricketer);
console.log(Cricketer);

class Debutant {
    constructor(name) {
        this.name = name;
        this.walkOut = () => `${this.name} walks out to bat for the first time`
    }
}

const debutant1 = new Debutant("Loid Forger")
const somethingFromLastClass = debutant1.walkOut;
console.log(somethingFromLastClass);

const debutant2 = new Debutant("Yashasvi");
console.log(debutant1.walkOut === debutant2.walkOut);
