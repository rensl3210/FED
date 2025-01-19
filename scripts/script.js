// JavaScript Document
let menu = document.querySelector("header > button:nth-of-type(1)");
let cartKnop = document.querySelector("header > button:nth-of-type(2)");
let navigatie = document.querySelector("header > section:nth-of-type(1)");
let cart = document.querySelector("header > section:nth-of-type(2)");
let cart_product_section = document.querySelector("header > section:nth-of-type(2) > section:nth-of-type(1)");
let total_section = document.querySelector("header > section:nth-of-type(2) > section:nth-of-type(2)");
let checkout_button = document.querySelector("header > section:nth-of-type(2) > a");
let cart_total = document.querySelector("header > section:nth-of-type(2) > section:nth-of-type(2) p");
let verduister = document.querySelector("main > div:nth-of-type(1)");

window.addEventListener("keydown", keyPress);

menu.addEventListener("click", function() {
  openMenu();
});

cartKnop.addEventListener("click", function() {
  openCart();
});

verduister.addEventListener("click", function() {
  if (navigatie.classList.contains("open")) {
    openMenu();
  }
  else{
    openCart();
  }
})

function openMenu(){
  navigatie.classList.toggle("open");
  verduister.classList.toggle("open");
  if (menu.innerHTML == "Menu") menu.innerHTML = "Close";
  else menu.innerHTML = "Menu";
  if (navigatie.classList.contains("open")) {
    cartCheck();
    addAccessibility(navigatie);
  }
  else {
    removeAccessibility(navigatie);
  }
}

function openCart(){
  product_amount = cart_product_section.childElementCount - 1;
  console.log(product_amount);
  product_amount_text = product_amount.toString();
  console.log(product_amount_text);
  console.log("menu gaat gewoon open")
  cart.classList.toggle("open");
  verduister.classList.toggle("open");

  cartButton();

  totalPrice();

  shoppingCartEmpty();

  if (cart.classList.contains("open")) {
    menuCheck();
    addAccessibility(cart);
  }
  else {
    removeAccessibility(cart);
  }

}

function cartButton(){
  if (cartKnop.innerHTML != "Close") {
    cartKnop.innerHTML = "Close";
  }
  else if (cartKnop.innerHTML == "Close" && product_amount > 0) {
    cartKnop.innerHTML = "Cart(" + product_amount_text + ")"
  }
  else if (cartKnop.innerHTML == "Close" && product_amount == 0 || product_amount < 0) {
    cartKnop.innerHTML = "Cart(0)"
  }
}

function totalPrice(){
  let prices = cart_product_section.querySelectorAll("section > p")
  let totalPrice = 0;
  prices.forEach((price) =>{
    price_textmoney = price.innerHTML;
    price_text = price_textmoney.substring(1); //bron 4
    final_price = parseInt(price_text);
    totalPrice += final_price;
  })
  cart_total.innerHTML = totalPrice.toString() + ".00";
  
}

function menuCheck(){
  if (navigatie.classList.contains("open")) {
    openMenu();
    return true;
  }
}

function cartCheck(){
  if (cart.classList.contains("open")) {
    openCart();
    return true;
  }
}

function shoppingCartEmpty() {
  if (cart_product_section.childElementCount == 1) {
    cart_product_section.classList.add("hidden");
    total_section.classList.add("hidden");
    checkout_button.classList.add("hidden");
  }
  else {
    cart_product_section.classList.remove("hidden");
    total_section.classList.remove("hidden");
    checkout_button.classList.remove("hidden");
  }
}

//bron 2
function keyPress(e) {
  if (e.key === "Escape") {
    menuCheck();
    cartCheck();
  }
}
//eind bron 2



//bron 3
function removeAccessibility(element) {
  element.setAttribute("aria-hidden", "true");
  element.querySelectorAll("a, button").forEach((focusable) => {
    focusable.setAttribute("tabindex", "-1");
  })
}

function addAccessibility(element) {
  element.setAttribute("aria-hidden", "false");
  element.querySelectorAll("a, button, input, [tabindex]").forEach((focusable) => {
    focusable.removeAttribute("tabindex");
  });
}
//eind bron 3

