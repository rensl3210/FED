let products = document.querySelectorAll("main ul li");
let addProductButtons = document.querySelectorAll("main ul li section button");
let itemsSection = document.querySelector("header section:nth-of-type(2) > section");


addProductButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        openProductMenu(products[index]);
    });
});

function openProductMenu(product) {
    let sizes = product.querySelector("section ul");
    if (sizes !== null) {
        sizes.classList.add("open2");

        //bron 3
        let sizeButtons = sizes.querySelectorAll("button");
        sizeButtons.forEach((sizeButton) => {
            sizeButton.replaceWith(sizeButton.cloneNode(true));
        });

        let updatedSizeButtons = sizes.querySelectorAll("button");
        updatedSizeButtons.forEach((sizeButton) => {
            sizeButton.addEventListener(
                "click",
                function () {
                    let size = sizeButton.textContent;
                    addToCart(product, size);
                },
                { once: true }
            );
        });
        //einde bron 3

        sizes.addEventListener("mouseleave", function closeMenu() {
            sizes.classList.remove("open2");
            sizes.removeEventListener("mouseleave", closeMenu);
        });
    } else {
        addToCart(product);
    }
}


function addToCart(productContent, size) {

    let title = productContent.querySelector("section h3").textContent;
    let price = productContent.querySelector("section p").textContent;
    let image = productContent.querySelector("section a img").src;

    let cartTitle = document.createElement("h3");
    cartTitle.textContent = title;

    let cartPrice = document.createElement("p");
    cartPrice.textContent = price;

    let cartImage = document.createElement("img");
    cartImage.src = image;

    let extraInfoContainer = document.createElement("div");
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";

    removeButton.addEventListener("click", function () {
        productContainer.remove();
        totalPrice();
        shoppingCartEmpty();
    });

    let productContainer = document.createElement("section");

    itemsSection.appendChild(productContainer);
    productContainer.appendChild(extraInfoContainer);
    extraInfoContainer.appendChild(cartTitle);
    extraInfoContainer.appendChild(removeButton);
    productContainer.appendChild(cartPrice);
    productContainer.appendChild(cartImage);

    if (size != null) {
        let cartSize = document.createElement("p");
        cartSize.textContent = size;
        extraInfoContainer.appendChild(cartSize);
    }

    openCart();
    
}



