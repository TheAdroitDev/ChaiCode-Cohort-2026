const themeButton = document.getElementById("toggleButton")

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        themeButton.textContent = "Switch to Light Mode"
    }
    else{
        themeButton.textContent = "Switch to Dark Mode"
    }
})

