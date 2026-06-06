const form = document.querySelector("#todo-form")
const toDoList = document.querySelector("#todo-list")

let toDoItems =  JSON.parse(localStorage.getItem("items")) || []

//Show items from LS on page after reload
if (localStorage.getItem("items") !== null) {
   
    let itemsLS = JSON.parse(localStorage.getItem("items"))
    itemsLS.forEach(item => {
        
        addHTMLstructure(item)

     })

} else {
    console.log("Nothing saved in local storage")
}


//submit event
form.addEventListener("submit", event => {
    event.preventDefault()

    if (event.target.elements.todo.value === "") {
       return

    } else {

        //push input text to object in array
        toDoItems.push({
            id: "",
            toDo: event.target.elements.todo.value.trim(),
            completion: false,
        })

        //save items to local storage and get them out
        item = JSON.stringify(toDoItems)
        localStorage.setItem("items", item)
        let itemsLS = JSON.parse(localStorage.getItem("items"))
    
         //create paragraph and add text to page
        addHTMLstructure(item)
    }

    //clear input
    event.target.elements.todo.value = ""
})