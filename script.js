const form = document.querySelector("#todo-form")

 let toDoItems = []

form.addEventListener("submit", event => {
    event.preventDefault()

    if (event.target.elements.todo.value === "") {
       return

    } else {

        toDoItems.push({
            id: "",
            toDo: event.target.elements.todo.value.trim(),
            completion: false,
        })

        toDoItemsJSON = JSON.stringify(toDoItems)
        localStorage.setItem("items", toDoItemsJSON)

        let toDoItemsFromLS = localStorage.getItem("items")
        let toDOItemsForList = JSON.parse(toDoItemsFromLS)

    let task = document.createElement("p")
    task.textContent =  toDOItemsForList[toDOItemsForList.length - 1].toDo
    console.log(task)
    const toDoList = document.querySelector("#todo-list")
    toDoList.appendChild(task)

    }

    event.target.elements.todo.value = ""
})