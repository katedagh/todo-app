const form = document.querySelector("#todo-form")
const toDoList = document.querySelector("#todo-list")

//create empty array or get data from local storage to render it in the next step
let toDoItems =  JSON.parse(localStorage.getItem("items")) || []

//show items on the page after reload
renderTask()

//form submit event
form.addEventListener("submit", event => {
    event.preventDefault()
    let input = event.target.elements.todo
    let inputText = input.value.trim()

    if (inputText === "") {
       return

    } else {
        //push input text to object in array
        toDoItems.push({
            id: uuidv4(),
            toDo: inputText,
            isCompleted: false,
        })

        //save items to local storage and add HTML to page
        saveToLocalStorage()
        //addHTMLstructure(toDoItems[toDoItems.length - 1])
        renderTask()
    }

    //clear input
    input.value = ""
})