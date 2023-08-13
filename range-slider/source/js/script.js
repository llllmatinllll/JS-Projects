const $ = document;
let container = $.querySelector(".container");
let range = $.querySelector("#range");
let btn = $.querySelector(".btn");
let brightnessBox = $.querySelector(".brightness-box");

range.addEventListener("change", (event) => {
    let rangeNumber = event.target.value;
    container.style.filter = "brightness(" + rangeNumber + "%)";
    console.log(100 - rangeNumber);
});

btn.addEventListener("click", () => {
    brightnessBox.style.display = "flex";
    btn.style.display = "none";
});

$.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
        brightnessBox.style.display = "none";
        btn.style.display = "block";
    }
});
