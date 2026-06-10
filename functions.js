const saveToLocalStorage = () => {
    toDoItemsJSON = JSON.stringify(toDoItems)
    localStorage.setItem("items", toDoItemsJSON)
}

const renderTask = () => {
     toDoList.innerHTML = ""
     toDoItems.forEach(item => {
         addHTMLstructure(item)  
     })
}

const addHTMLstructure = (item) => {
        const container = document.createElement("div")
        container.classList.add("task-container")
            
        const leftSide = document.createElement("div")
        leftSide.classList.add("task-container-left")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        const task = document.createElement("p")
        task.textContent = item.toDo

        const rightSide = document.createElement("div")
        rightSide.classList.add("task-container-right")

        const editBtn = document.createElement("button")
        editBtn.textContent = "edit"
        editBtn.classList.add("btn")

        const removeBtn = document.createElement("button")
        removeBtn.textContent = "remove"
        removeBtn.classList.add("btn")

        removeBtn.addEventListener("click", event => {
            const index = toDoItems.findIndex(
                task => task.id === item.id
            )
            toDoItems.splice(index, 1)
            saveToLocalStorage()
            renderTask()
        })
        
        container.appendChild(leftSide)
        container.appendChild(rightSide)
        leftSide.appendChild(checkbox)
        leftSide.appendChild(task)
        rightSide.appendChild(editBtn)
        rightSide.appendChild(removeBtn)
        toDoList.appendChild(container)
        }
