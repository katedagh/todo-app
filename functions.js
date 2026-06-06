const addHTMLstructure = (item) => {

        const container = document.createElement("div")
        
        const removebtn = document.createElement("button")
        removebtn.textContent = "remove"

        const task = document.createElement("p")
        task.textContent = item.toDo
        
        container.appendChild(task)
        container.appendChild(removebtn)
        toDoList.appendChild(container)
        }