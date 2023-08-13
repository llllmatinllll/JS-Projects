const $ = document;
const switchElement = $.querySelector(".switch");

switchElement.addEventListener("click", () => {
    // Hint: Add 'dark' class to body :))
    $.body.classList.toggle("dark");

    if ($.body.className.includes("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.onload = () => {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        $.body.classList.add("dark");
    } else {
        $.body.classList.remove("dark");
    }
};
