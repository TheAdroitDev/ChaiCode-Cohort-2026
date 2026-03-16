/* const anime = {
    name: "Spy x Family",
    season: 3,
    getAnime(){
        console.log(this.name)
        seasonCount = 3
        function season(){
            console.log(seasonCount)
        }
    }
    
}
anime.getAnime.season() */


function anime() {
   console.log(typeof this);
}
anime()
function ranveerWithNoScript() {
    "use strict"
    return this
}
console.log(ranveerWithNoScript());

