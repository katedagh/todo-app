const form = document.querySelector("#todo-form")
const toDoList = document.querySelector("#todo-list")

let toDoItems = []

form.addEventListener("submit", event => {
    event.preventDefault()

    if (event.target.elements.todo.value === "") {
       return

    } else {

        //push input text to object in array
        toDoItems.push({
            id: "",
            toDo: event.target.elements.todo.value.trim(),
            completion: false,
        })

        //save items to local storage and get them out
        toDoItemsJSON = JSON.stringify(toDoItems)
        localStorage.setItem("items", toDoItemsJSON)
        let toDoItemsFromLS = localStorage.getItem("items")
        let toDOItemsForList = JSON.parse(toDoItemsFromLS)
    
         //create paragraph and add text to page
        let task = document.createElement("p")
        task.textContent =  toDOItemsForList[toDOItemsForList.length - 1].toDo
        toDoList.appendChild(task)

    }

    //clear input
    event.target.elements.todo.value = ""
})