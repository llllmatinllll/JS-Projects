const $ = document;
const sliderImg = $.querySelector("img");
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let images = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg",
    "image/6.jpg",
    "image/7.jpg",
    "image/8.jpg",
    "image/9.jpg",
    "image/10.jpg"
];
let imgIndex = 0;

let nextImg = () => {
    imgIndex++;
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    }
    if (imgIndex > images.length - 1) {
        imgIndex = 0;
    }
    sliderImg.setAttribute("src", images[imgIndex]);
};

let prevImg = () => {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    }
    if (imgIndex > images.length - 1) {
        imgIndex = 0;
    }
    sliderImg.setAttribute("src", images[imgIndex]);
};

next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);

setInterval(nextImg, 5000);
