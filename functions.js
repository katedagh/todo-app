const saveToLocalStorage = () => {
    toDoItemsJSON = JSON.stringify(toDoItems)
    localStorage.setItem("items", toDoItemsJSON)
}

const renderTask = () => {
     toDoList.innerHTML = ""
     let toDOItemsLS = JSON.parse(localStorage.getItem("items"))
     toDOItemsLS.forEach(item => {
         addHTMLstructure(item)  
     })
   
}

const addHTMLstructure = (item) => {
        const container = document.createElement("div")
        container.classList.add("task-container")
        
        const rightSide = document.createElement("div")
        rightSide.classList.add("task-container-right")
        
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")

        const removebtn = document.createElement("button")
        removebtn.textContent = "remove"
        removebtn.classList.add("btn")
        //addeventlistener function for button to remove item here
        removebtn.addEventListener("click", event => {
            const index = toDoItems.findIndex(task => {
                return task.id === item.id
            })
            toDoItems.splice(index, 1)
            //update localStorage and HTML
            saveToLocalStorage()
            renderTask()
        })

        const task = document.createElement("p")
        task.textContent = item.toDo
        
        container.appendChild(task)
        container.appendChild(rightSide)
        rightSide.appendChild(checkbox)
        rightSide.appendChild(removebtn)
        toDoList.appendChild(container)
        }
