const $ = document;
let input = $.querySelector(".input");
let inputMaxLength = input.getAttribute("maxlength");
let counter = $.querySelector(".counter");
input.addEventListener("keyup", () => {
    let inputValueLength = input.value.length;
    let length = inputMaxLength - inputValueLength;
    counter.innerHTML = length;
});
