// DOM => Document Object Model
// BOM => Browser Object Model
const $ = document;
const container = $.querySelector(".container");

let productsArr = [
    {id: 1, title: "Sport Shoe", price: 53},
    {id: 2, title: "Women Shoe", price: 34},
    {id: 3, title: "Boots", price: 81},
];

productsArr.forEach((product) => {
    container.insertAdjacentHTML(
        "beforeend",
        '<div class="product-card"><h1>' +
            product.title +
            '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url(images/'+product.id+'.png);"></div><div class="product-info"><div class="product-price">$'+product.price+'</div><a href="product.html?id='+product.id+'" + product.id + class="product-button">See More</a></div></div>'
    );
});
