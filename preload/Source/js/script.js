const $ = document;
const loaderImg = $.querySelector(".loader");

window.addEventListener("load", () => {
    loaderImg.classList.add("hidden");
    // loaderImg.className += " hidden";
});
