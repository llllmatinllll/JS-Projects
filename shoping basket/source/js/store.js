const $ = document;
let allProducts = [
    {id: 1, title: "Album 1", price: 5, img: "Images/Album 1.png", count: 1},
    {id: 2, title: "Album 2", price: 15, img: "Images/Album 2.png", count: 1},
    {id: 3, title: "Album 3", price: 20, img: "Images/Album 3.png", count: 1},
    {id: 4, title: "Album 4", price: 100, img: "Images/Album 4.png", count: 1},
    {id: 5, title: "Coffee", price: 5, img: "Images/Cofee.png", count: 1},
    {id: 6, title: "Shirt", price: 50, img: "Images/Shirt.png", count: 1},
];

let userBasket = [];

const shopItemsContainer = $.querySelector(".shop-items");
const bastekProductsContainer = $.querySelector(".cart-items");
const removeAllProductsBtn = $.querySelector("#remove-all-products");
const cartTotalPriceElem = $.querySelector(".cart-total-price");

allProducts.forEach(function (product) {
    let productContainer = $.createElement("div");
    productContainer.classList.add("shop-item");

    let productTitleSpan = $.createElement("span");
    productTitleSpan.classList.add("shop-item-title");
    productTitleSpan.innerHTML = product.title;

    let productImageElem = $.createElement("img");
    productImageElem.classList.add("shop-item-image");
    productImageElem.setAttribute("src", product.img);

    let productDetailsContainer = $.createElement("div");
    productDetailsContainer.classList.add("shop-item-details");

    let productPriceSpan = $.createElement("span");
    productPriceSpan.innerHTML = "$" + product.price;
    productPriceSpan.classList.add("shop-item-price");

    let prodcutAddButton = $.createElement("button");
    prodcutAddButton.innerHTML = "ADD TO CART";
    prodcutAddButton.className = "btn btn-primary shop-item-button";
    prodcutAddButton.addEventListener("click", () => {
        addProductToBasketArray(product.id);
    });

    productDetailsContainer.append(productPriceSpan, prodcutAddButton);
    productContainer.append(
        productTitleSpan,
        productImageElem,
        productDetailsContainer
    );
    shopItemsContainer.append(productContainer);
});

let addProductToBasketArray = (productId) => {
    let mainProduct = allProducts.find((product) => {
        return product.id === productId;
    });
    let checkBasket = userBasket.find((product) => {
        return product == mainProduct;
    });
    if (checkBasket) {
        console.log("there is");
        mainProduct.count += 1;
    } else {
        console.log("there is not");
        userBasket.push(mainProduct);
    }

    basketProductsGenerator(userBasket);
    calcTotalPrice(userBasket);

    console.log(userBasket);
};

let basketProductsGenerator = (userBasketArray) => {
    bastekProductsContainer.innerHTML = "";

    userBasketArray.forEach((product) => {
        let basketProductContainer = $.createElement("div");
        basketProductContainer.classList.add("cart-row");

        let basketProductDetailsContainer = $.createElement("div");
        basketProductDetailsContainer.className = "cart-item cart-column";

        let basketProductImg = $.createElement("img");
        basketProductImg.setAttribute("src", product.img);
        basketProductImg.setAttribute("width", "100");
        basketProductImg.setAttribute("height", "100");
        basketProductImg.classList.add("cart-item-image");

        let basketProductTitleSpan = $.createElement("span");
        basketProductTitleSpan.classList.add("cart-item-title");
        basketProductTitleSpan.innerHTML = product.title;

        basketProductDetailsContainer.append(
            basketProductImg,
            basketProductTitleSpan
        );

        let basketProductPriceSpan = $.createElement("span");
        basketProductPriceSpan.className = "cart-price cart-column";
        basketProductPriceSpan.innerHTML = "$" + product.price;

        let basketProductInputsContainer = $.createElement("div");
        basketProductInputsContainer.className = "cart-quantity cart-column";

        let basketProductInput = $.createElement("input");
        basketProductInput.className = "cart-quantity-input";
        basketProductInput.value = product.count;
        basketProductInput.setAttribute("type", "number");
        basketProductInput.addEventListener("change", () => {
            updateProductCount(product.id, basketProductInput.value);
        });

        let basketProductRemoveBtn = $.createElement("button");
        basketProductRemoveBtn.className = "btn btn-danger";
        basketProductRemoveBtn.innerHTML = "Remove";
        basketProductRemoveBtn.addEventListener("click", () => {
            userBasket.forEach((product) => {
                product.count = 1;
                console.log(product);
            });
            removeProductFromBasket(product.id);
        });

        basketProductInputsContainer.append(
            basketProductInput,
            basketProductRemoveBtn
        );

        basketProductContainer.append(
            basketProductDetailsContainer,
            basketProductPriceSpan,
            basketProductInputsContainer
        );

        bastekProductsContainer.append(basketProductContainer);
    });
};

let removeProductFromBasket = (productId) => {
    userBasket = userBasket.filter((product) => {
        return product.id !== productId;
    });

    basketProductsGenerator(userBasket);
    calcTotalPrice(userBasket);
};

removeAllProductsBtn.addEventListener("click", () => {
    userBasket = [];
    basketProductsGenerator(userBasket);
    calcTotalPrice(userBasket);
});

let calcTotalPrice = (userBasketArray) => {
    let totalPriceValue = 0;

    userBasketArray.forEach((product) => {
        totalPriceValue += product.count * product.price;
    });

    cartTotalPriceElem.innerHTML = "$" + totalPriceValue;
};

let updateProductCount = (productId, newCount) => {
    userBasket.forEach((product) => {
        if (product.id === productId) {
            product.count = newCount;
        }
    });
    calcTotalPrice(userBasket);
};
