// JavaScript Document
let darkmodebutton = document.querySelector("header section div > button");
let darkmodebutton_check = document.querySelector("header section div > img");
let logo = document.querySelector("header > a img");
let root = document.documentElement;

darkmodebutton.addEventListener("click", function() {
    darkmodebutton_check.classList.toggle("open");
    if (darkmodebutton.innerHTML == "turn on darkmode") {
        darkmodebutton.innerHTML = "turn off darkmode";
        root.style.setProperty("--tyler-background", "#191919");
        root.style.setProperty("--text-color", "#98D5E6");
        root.style.setProperty("--fade-background", "#000000");
        logo.src = "images/lefleur_logo_darkmode.png";
    }
    else {
        darkmodebutton.innerHTML = "turn on darkmode";
        root.style.setProperty("--tyler-background", "#FEF8ED");
        root.style.setProperty("--text-color", "#00000");
        root.style.setProperty("--fade-background", "rgb(54 31 15)");
        logo.src = "images/lefleur_logo.png";
    }


})