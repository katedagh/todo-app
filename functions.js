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

const getIndex = (todo) => {
 const index = toDoItems.findIndex(
                task => task.id === todo.id
            )
            return index
}

const addHTMLstructure = (item) => {

    if (item.isBeingEdited === false) {
        
        const container = document.createElement("div")
        container.classList.add("task-container")
            
        const leftSide = document.createElement("div")
        leftSide.classList.add("task-container-left")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = item.isCompleted

        checkbox.addEventListener("change", () => {
            const index = getIndex(item)
            
            if (checkbox.checked) {
                toDoItems[index].isCompleted = true
                task.classList.add("checked")
            } else {
                toDoItems[index].isCompleted = false
                task.classList.remove("checked")
            }
            saveToLocalStorage()
            renderTask()
        })

        const task = document.createElement("p")
        task.textContent = item.toDo

           if (checkbox.checked) {
                task.classList.add("checked") }
            else {
                task.classList.remove("checked")
                }

        const rightSide = document.createElement("div")
        rightSide.classList.add("task-container-right")

        const editBtn = document.createElement("button")
        editBtn.textContent = "edit"
        editBtn.classList.add("btn")

        editBtn.addEventListener("click", () => {
            const index = getIndex(item)
            toDoItems[index].isBeingEdited = true
            saveToLocalStorage()
            renderTask()
        })

        const removeBtn = document.createElement("button")
        removeBtn.textContent = "remove"
        removeBtn.classList.add("btn")

        removeBtn.addEventListener("click", event => {
            const index = getIndex(item)
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


        
        } else if (item.isBeingEdited === true) {

        const container = document.createElement("div")
        container.classList.add("task-container")
            
        const leftSide = document.createElement("div")
        leftSide.classList.add("task-container-left")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = item.isCompleted
       

        checkbox.addEventListener("change", () => {
            const index = getIndex(item)
            
            if (checkbox.checked) {
                toDoItems[index].isCompleted = true
                task.classList.add("checked")
            } else {
                toDoItems[index].isCompleted = false
                task.classList.remove("checked")
            }
            saveToLocalStorage()
            renderTask()
        })

        const task = document.createElement("input")
       task.classList.add("edit-input")
       task.type = "text"
       task.value = item.toDo

           if (checkbox.checked) {
                task.classList.add("checked") }
            else {
                task.classList.remove("checked")
                }

        const rightSide = document.createElement("div")
        rightSide.classList.add("task-container-right")

        const saveBtn = document.createElement("button")
        saveBtn.textContent = "save"
        saveBtn.classList.add("btn", "btn-green")

        saveBtn.addEventListener("click", (event) => {
            const index = getIndex(item)
           toDoItems[index].toDo = task.value.trim()
           toDoItems[index].isBeingEdited = false
            saveToLocalStorage()
            renderTask()
        })

        const cancelBtn = document.createElement("button")
        cancelBtn.textContent = "cancel"
        cancelBtn.classList.add("btn", "btn-red")

        cancelBtn.addEventListener("click", () => {
            const index = getIndex(item)
            toDoItems[index].isBeingEdited = false
            renderTask()
        })
        
        container.appendChild(leftSide)
        container.appendChild(rightSide)
        leftSide.appendChild(checkbox)
        leftSide.appendChild(task)
        rightSide.appendChild(saveBtn)
        rightSide.appendChild(cancelBtn)
        toDoList.appendChild(container)
        }

    }
