const saveToLocalStorage = () => {
    toDoItemsJSON = JSON.stringify(toDoItems)
    localStorage.setItem("items", toDoItemsJSON)
}

const renderTask = () => {
    toDoList.innerHTML = ""
    toDoItems.forEach(item => { 
         addHTMLstructure(item)  
     })
    const todosLeft = toDoItems.filter(item => !item.isCompleted)
    const todosCompleted = toDoItems.filter(item => item.isCompleted)
    const statsParagraph = document.createElement("p")
    statsParagraph.classList.add("stats")
    statsParagraph.textContent = translations[language].completed + todosCompleted.length + translations[language].left + todosLeft.length
    toDoList.appendChild(statsParagraph)
}

const getIndex = (todo) => {
 const index = toDoItems.findIndex(
                task => task.id === todo.id
            )
            return index //must return it and then save it to variable when using elsewhere
}

const createCheckbox = (item) => {
     const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = item.isCompleted

        checkbox.addEventListener("change", () => {
            const index = getIndex(item)
            
            if (checkbox.checked) {
                toDoItems[index].isCompleted = true
            } else {
                toDoItems[index].isCompleted = false
            }
            saveToLocalStorage()
            renderTask()

        })
        return checkbox
}

const changeLanguage = () => {
    heading.textContent = translations[language].title
    formInput.placeholder = translations[language].input
    formBtn.value = translations[language].add
}

const addHTMLstructure = (item) => {

    if (item.isBeingEdited === false) {
        
        const container = document.createElement("div")
        container.classList.add("task-container")
            
        const leftSide = document.createElement("div")
        leftSide.classList.add("task-container-left")

        const checkbox = createCheckbox(item)

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
        editBtn.textContent = translations[language].edit
        editBtn.classList.add("btn", "btn-green")

        editBtn.addEventListener("click", () => {
            const index = getIndex(item)
            toDoItems[index].isBeingEdited = true
            saveToLocalStorage()
            renderTask()
        })

        const removeBtn = document.createElement("button")
        removeBtn.textContent = translations[language].remove
        removeBtn.classList.add("btn", "btn-red")

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

        const checkbox = createCheckbox(item)

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
        saveBtn.textContent = translations[language].save
        saveBtn.classList.add("btn", "btn-green")

        saveBtn.addEventListener("click", (event) => {
            const index = getIndex(item)
           toDoItems[index].toDo = task.value.trim()
           toDoItems[index].isBeingEdited = false
            saveToLocalStorage()
            renderTask()
        })

        const cancelBtn = document.createElement("button")
        cancelBtn.textContent = translations[language].cancel
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
