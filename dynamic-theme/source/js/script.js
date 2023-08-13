const $ = document;
let btns = $.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let color = event.target.dataset.color;
        $.documentElement.style.setProperty("--theme-color", color);
    });
});
