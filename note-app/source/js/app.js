const $ = document;
let input = $.getElementById("input-field");
let btnSave = $.getElementById("btn-save");
let btnDelete = $.getElementById("btn-delete");
let colorsBox = $.querySelectorAll(".color-box");
let notesContainer = $.getElementById("listed");
// generate New Note Function
let generateNewNote = () => {
    if (input.value.trim() == "") {
        alert("Please Enter your Note");
    } else {
        let div = $.createElement("div");
        div.className = "card shadow-sm rounded";
        div.addEventListener("click", (event) => {
            event.target.parentElement.remove();
        });
        let p = $.createElement("p");
        p.className = "card-text p-3";
        p.innerHTML = input.value;
        div.append(p);
        notesContainer.append(div);
        input.value = "";
        div.style.backgroundColor = input.style.backgroundColor;
        input.style.backgroundColor = "#fff";
    }
};

// change note color function
colorsBox.forEach((colorBox) => {
    colorBox.addEventListener("click", (event) => {
        let mainColor = event.target.style.backgroundColor;
        input.style.backgroundColor = mainColor;
    });
});

// cleane note input function
btnDelete.addEventListener("click", () => {
    input.value = "";
    input.style.backgroundColor = "#fff";
});

// add new note by Enter
input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        generateNewNote();
    }
});
// add new note by Save btn
btnSave.addEventListener("click", generateNewNote);
