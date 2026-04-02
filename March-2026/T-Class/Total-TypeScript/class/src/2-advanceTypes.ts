// Type Alias

type Team ={
    name: string;
    getSquad : ()=> string[];
    price: number;
    isBanned: boolean
}

let csk : Team = {
    name: "Chennai Super Kings",
    getSquad(){
        return ["MS"]
    },
    price: 500_000,
    isBanned: true,
}

// Union Types
// function kgToLbs(weight: number | string):number() { }


// Intersection Types 



// Nullable