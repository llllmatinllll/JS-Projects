const $ = document;
let nav = $.getElementById("mainNav");
let img = $.querySelector(".logo-img");

$.addEventListener("scroll", () => {
    if ($.documentElement.scrollTop > 0) {
        nav.className = "bg-black txt-white";
        img.style.height = "64px";
    } else {
        nav.className = "";
        img.style.height = "84px";
    }
});
