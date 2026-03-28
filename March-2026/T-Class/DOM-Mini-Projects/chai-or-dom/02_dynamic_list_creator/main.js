const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click" , ()=>{
   if(input.value === "") {
    alert("Mat kr lala!")
    return;
   }

   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.textContent = "Delete";
   delBtn.classList.add("delete");

   li.textContent = input.value;

   delBtn.addEventListener("click" , ()=>{
        li.remove();
   })

   li.appendChild(delBtn)
   list.appendChild(li);

   input.value = ""

})