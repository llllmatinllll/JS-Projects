const $ = document;
// Variables
let input = $.getElementsByTagName("input");
let addTodo = $.querySelector(".add");
let ul = $.querySelector(".todos");

// Functions
// Prevent Enter key
addTodo.addEventListener("submit", (event) => {
    event.preventDefault();
});
// Add New Todo
let addNewTodo = (newTodo) => {
    let newLi = $.createElement("li");
    let newSpan = $.createElement("span");
    let removeIcon = $.createElement("i");
    newSpan.innerHTML = newTodo;
    newLi.className =
        "list-group-item d-flex justify-content-between align-items-center";
    removeIcon.className = "fa fa-trash-o delete";
    newLi.append(newSpan, removeIcon);
    ul.append(newLi);
    input[0].value = "";
    removeIcon.addEventListener("click", (event) => {
        let parent = event.target.parentElement;
        parent.remove();
    });
};

// Check Enter key and add new todo

input[0].addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        let inputValue = input[0].value.trim();
        if (inputValue != "") {
            addNewTodo(inputValue);
        }
    } else {
        // console.log("bad");
    }
});
