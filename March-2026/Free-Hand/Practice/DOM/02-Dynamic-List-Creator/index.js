const input = document.getElementById("itemInput")
const addButton = document.getElementById("addButton")
const list = document.getElementById("list")

addButton.addEventListener("click", () => {
    
    const listItem = document.createElement("li")
    const listContent = document.createElement("span")
    const delBtn = document.createElement("button")

    delBtn.className = "delete"
    delBtn.textContent = "Discard"

    listContent.textContent = input.value
    list.appendChild(listItem)
    listItem.appendChild(listContent)
    listItem.appendChild(delBtn)
    input.value = ''

    // Editing functionality
    listItem.addEventListener("dblclick", (e) => {
        input.value = listContent.textContent
        listItem.remove()
    })

    // Delete functionality
    delBtn.addEventListener("click", () => {
        if (confirm("Sure want to Delete?")) {
            listItem.remove()
        }
    })
})

