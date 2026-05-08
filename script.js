const form = document.querySelector("#todo-form")

form.addEventListener("submit", event => {
    event.preventDefault()

    if (event.target.elements.todo.value === "") {
       return

    } else {

    let task = document.createElement("p")
    task.textContent =  event.target.elements.todo.value.trim()
    const toDoList = document.querySelector("#todo-list")
    toDoList.appendChild(task)

    }

    event.target.elements.todo.value = ""
})