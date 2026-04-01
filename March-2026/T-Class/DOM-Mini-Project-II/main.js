const btn = document.getElementById("btn");


// btn.onclick = function(){
//     console.log("Hello world from dom")
// }

// btn.onclick = function(){
//     console.log("Hello world from dom - 2")
// }

// btn.addEventListener("click" , function(){
//     console.log("Clicked!")
// })

// btn.addEventListener("click" , function(){
//     console.log("Clicked-2!")
// })

// btn.addEventListener("click" , function(){
//     console.log("Clicked-3!")
// })
btn.addEventListener("click" , ()=>{
    console.log("Clicked!")
})

const parent = document.getElementById("parent")
const child = document.getElementById("child")
const body = document.body;



// parent.addEventListener("click" , function(){
//     console.log("parent Clicked!")
// },true)

parent.addEventListener("click" , (event)=>{
    // event.stopPropagation();
    console.log("Parent capturing ")
},true)

// e.stopImmediatePropagation();

// body.addEventListener("click" , ()=>{
//     console.log("Body capturing ")
// },true)


child.addEventListener("click" , function(event){
    console.log('child clicked')
    console.log(event)
})

// parent.addEventListener("click" , ()=>{
//     console.log("parent Bubbling")
// })

// parent.addEventListener("click" , ()=>{
//     console.log("parent Bubbling again")
// })

// body.addEventListener("click" , ()=>{
//     console.log("Body Bubbling ")
// })
/* const items = document.querySelectorAll("li");

// items.forEach((item)=>{
//     item.addEventListener("click" , ()=>{
//         console.log(item.textContent)
//     })
// })

const anchor = document.getElementById("link");

anchor.addEventListener("click" , (e)=>{
    e.preventDefault()
    console.log("clicked")
})

const list = document.getElementById("list")

list.addEventListener("click" , (e)=>{
    if(e.target.tagName === "LI"){
        console.log(e.target.textContent)
    }
})

// closest() */