const $ = document;
let btn = $.querySelector("button");
let modal = $.querySelector(".modal-parent");
let close = $.querySelector(".X");
let title = $.querySelector(".center");
let section = $.querySelector("section");

btn.addEventListener("click", () => {
    section.style.filter = "blur(10px)";
    modal.style.display = "block";
    title.style.display = "none";
});

close.addEventListener("click", () => {
    section.style.filter = "blur(0px)";
    title.style.display = "flex";
    modal.style.display = "none";
});

$.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
        section.style.filter = "blur(0px)";
        title.style.display = "flex";
        modal.style.display = "none";
    }
});
