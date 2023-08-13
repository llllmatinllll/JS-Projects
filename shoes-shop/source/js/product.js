// ✌ :))
const $ = document;
let btnBack = $.querySelector("button");
let shoeTitle = $.querySelector(".title");
let shoeDesk = $.querySelector("p");
let shoeImage = $.querySelector("img");
let shoePrice = $.querySelector(".price");

let productsArr = [
    {id: 1, title: "Sport Shoe", price: 53},
    {id: 2, title: "Women Shoe", price: 34},
    {id: 3, title: "Boots", price: 81},
];

let locationParams = new URLSearchParams(location.search);
let mainProductId = locationParams.get("id");

let mainProductObject = productsArr.find((product) => {
    return product.id == mainProductId;
});

if (mainProductObject) {
    shoeTitle.innerHTML = mainProductObject.title;
    shoePrice.innerHTML = "$" + mainProductObject.price;
    shoeImage.setAttribute("src", "./images/" + mainProductObject.id + ".png");
} else {
    location.href = "http://127.0.0.1:5501/source/index.html";
}

btnBack.addEventListener("click", () => {
    history.back();
});
