let $ = document;
let btnAdd = $.querySelector("#add_btn");
let modal = $.querySelector(".modal");
let todoInput = $.querySelector("#todo_input");
let todoSubmit = $.querySelector("#todo_submit");
let noStatus = $.querySelector("#no_status");
let Allstatus = $.querySelectorAll(".status");
let btnClose = $.querySelector(".close-modal");

btnAdd.addEventListener("click", () => {
    modal.classList.toggle("active");
});
let idNumber = 0;

todoSubmit.addEventListener("click", () => {
    let inputValue = todoInput.value;
    if (inputValue.trim() != "") {
        modal.classList.remove("active");
            let newTodo = $.createElement("div");
            newTodo.className = "todo";
            newTodo.id = "newTodo" + idNumber;
            newTodo.draggable = "true";
            newTodo.innerHTML = inputValue;
            let removeIcon = $.createElement("span");
            removeIcon.className = "close";
            removeIcon.innerHTML = "&times;";
            newTodo.append(removeIcon);
            noStatus.append(newTodo);
            todoInput.value = "";
            newTodo.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData("elemId", event.target.id);
            });
            removeIcon.addEventListener("click", (event) => {
                event.target.parentElement.remove();
            });
            idNumber += 1;
    }
});

Allstatus.forEach((status) => {
    status.addEventListener("drop", (event) => {
        let elemId = event.dataTransfer.getData("elemId");
        let elem = $.getElementById(elemId);
        event.target.append(elem);
    });
    status.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
});

btnClose.addEventListener("click", () => {
    modal.classList.remove("active");
});
