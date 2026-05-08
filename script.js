const form = document.querySelector("#todo-form")

form.addEventListener("submit", event => {
    event.preventDefault()

    let task = document.createElement("p")
    task.textContent =  event.target.elements.todo.value

    const toDoList = document.querySelector("#todo-list")
    toDoList.appendChild(task)
})