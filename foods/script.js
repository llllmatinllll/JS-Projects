const $ = document;
const icons = $.querySelectorAll(".section-1-icons i");
const menu = $.querySelector(".menu");
const navbar = $.querySelector(".navbar");
const navbarLink = $.querySelector(".navbar-link");
let i = 1;

setInterval(() => {
    i++;
    const icon = $.querySelector(".section-1-icons .change");

    icon.classList.remove("change");
    if (i > icons.length) {
        icons[0].classList.add("change");
        i = 1;
    } else {
        icon.nextElementSibling.classList.add("change");
    }
    flag = false;
}, 4000);

menu.addEventListener("click", () => {
    menu.classList.toggle("change");
    navbar.classList.toggle("change");
    navbarLink.classList.toggle("change");
});
