const columns = document.querySelectorAll(".column");
let draggedTask = null;

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
        const text = prompt("Enter Task!");

        if (!text) return;

        const task = document.createElement("div");
        task.className = "task";
        task.textContent = text;

        task.setAttribute("draggable", true);

        e.target.previousElementSibling.appendChild(task);
    }
})

document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("task")) {
        draggedTask = e.target;
        e.target.classList.add("dragging")
    }
})

document.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("task")) {
        e.target.classList.remove("dragging")
        draggedTask = null;
    }
})

columns.forEach((col) => {
    col.addEventListener("dragover", (e) => {
        e.preventDefault()
        col.classList.add("drag-over")
    })

    col.addEventListener("dragend", (e) => {
        col.classList.remove("drag-over")
    })

    col.addEventListener("drop", (e) => {
        col.classList.remove("drag-over");

        if (draggedTask) {
            col.querySelector(".tasks").appendChild(draggedTask)
        }
    })

})