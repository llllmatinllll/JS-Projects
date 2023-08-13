const $ = document;
const title = $.querySelector(".title");
let keys = $.querySelectorAll("li");
$.addEventListener("keydown", (event) => {
    appendValueToDom(event);
    let userEventKey = event.key;
    let mainKeyElem = $.getElementById(userEventKey.toUpperCase());
    mainKeyElem.classList.add("hit");
    mainKeyElem.addEventListener("animationend", () => {
        mainKeyElem.classList.remove("hit");
    });
});

keys.forEach((key) => {
    key.addEventListener("click", (event) => {
        let userEventKey = event.target.innerHTML;
        let mainKeyElem = $.getElementById(userEventKey.toUpperCase());
        mainKeyElem.classList.add("hit");
        mainKeyElem.addEventListener("animationend", () => {
            mainKeyElem.classList.remove("hit");
        });
        if (event.target.innerHTML === "BACK") {
            title.innerHTML = title.innerHTML.slice(0, -1);
            return;
        }
        title.innerHTML += event.target.innerHTML;
        console.log(event);
    });
});

let appendValueToDom = (event) => {
    if (event.keyCode === 8) {
        title.innerHTML = title.innerHTML.slice(0, -1);
        return;
    }
    title.innerHTML += event.key;
    console.log(event);
};
