const fetchButton = document.getElementById("getAnime");

fetchButton.addEventListener("click",()=>{
    fetchAnimeForMe()
})

async function fetchAnimeForMe(){
    const res = await fetch("https://api.jikan.moe/v4/random/anime")
    const data = await res.json()

    // console.log(data);
    console.log(data.data.titles[0].title);;
    
}