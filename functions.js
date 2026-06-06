const addHTMLstructure = (item) => {
        const container = document.createElement("div")
        
        const removebtn = document.createElement("button")
        removebtn.textContent = "remove"

        //addeventlistener function for button to remove item here
        removebtn.addEventListener("click", event => {
            console.log(toDoItems)
            console.log(item.id)
            const index = toDoItems.findIndex(task => {
                return task.id === item.id
            })
            console.log(index)

        })



        const task = document.createElement("p")
        task.textContent = item.toDo
        
        container.appendChild(task)
        container.appendChild(removebtn)
        toDoList.appendChild(container)
        }
