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
        
        const rightSide = document.createElement("div")
        rightSide.classList.add("task-container-right")
        
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        const removebtn = document.createElement("button")
        removebtn.textContent = "remove"
        removebtn.classList.add("btn")

        removebtn.addEventListener("click", event => {
            const index = toDoItems.findIndex(task => {
                return task.id === item.id
            })
            toDoItems.splice(index, 1)
            saveToLocalStorage()
            renderTask()
        })

        const leftSide = document.createElement("div")
        leftSide.classList.add("task-container-left")

        const task = document.createElement("p")
        task.textContent = item.toDo
        
        container.appendChild(leftSide)
        container.appendChild(rightSide)
        leftSide.appendChild(checkbox)
        leftSide.appendChild(task)
        rightSide.appendChild(removebtn)
        toDoList.appendChild(container)
        }
