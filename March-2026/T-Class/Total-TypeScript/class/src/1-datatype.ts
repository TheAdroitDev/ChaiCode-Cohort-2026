// any type noImplicitAny
let name: any = "Shivam Verma"

// unknown
// type safe version of any
// unknown needs type narrowing



// never type
// the never type represents the value that never occur

/* function propose(message: string): never {
    throw new Error("Yor Forger")
}
propose("...") */

// Enumns
// always in pascal case
// Enumns represents a list of related constants
// const enum TeamStrenth { Weak = 1, Good, Strong };

// Type Annotations

// Tuple
// It's an array with fixed-length and where each element has a specific type

let album: [string, number] = ["Sounds of Strings", 12]

// Object

// Functions
function calculatePrice(team: string): number {
    if (team.toLowerCase() === "rr")
        return 15e10 // 15,000 Cr

    if (team.toLowerCase() === "rcb")
        return 18e10 // 18,000 Cr

    if (team.toLowerCase() === "csk")
        return 500_000 // 5 lakh

    return NaN;
}



// Type Inference 

