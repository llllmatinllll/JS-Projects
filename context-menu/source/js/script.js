const $ = document;
let contextMenu = $.querySelector(".context-menu");
let flag = false;

$.body.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    let x = event.pageX + "px";
    let y = event.pageY + "px";
    if (!flag) {
        contextMenu.style.display = "flex";
        flag = true;
        contextMenu.style.left = x;
        contextMenu.style.top = y;
    } else {
        contextMenu.style.display = "none";
        flag = false;
    }
});

$.body.addEventListener("click", () => {
    contextMenu.style.display = "none";
    flag = false;
});

$.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
        contextMenu.style.display = "none";
        flag = false;
    }
});
