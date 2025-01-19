// JavaScript Document
let carouselModels = document.querySelector("main > section:nth-child(6)")
let carouselLinks = document.querySelector("main > section:nth-child(6) button:nth-of-type(1)")
let carouselRechts = document.querySelector("main > section:nth-child(6) button:nth-of-type(2)")

let carouselProducts = document.querySelectorAll("main > section:nth-child(7) li div")


carouselProducts.forEach((carousel) => {
  let carouselProductLinks = carousel.parentElement.querySelector("button:nth-of-type(1)");
  let carouselProductRechts = carousel.parentElement.querySelector("button:nth-of-type(2)");

  carouselProductLinks.addEventListener("click", function () {
      let carouselWidth = carousel.offsetWidth; 
      carousel.scrollLeft -= carouselWidth; 
  });

  carouselProductRechts.addEventListener("click", function () {
      let carouselWidth = carousel.offsetWidth; 
      carousel.scrollLeft += carouselWidth; 
  });
});



carouselLinks.addEventListener("click", function() {
  var schermBreedte = window.innerWidth;
  if (schermBreedte > 960) {
    carouselModels.scrollLeft -= (schermBreedte / 4);
  }
  else if (schermBreedte > 640 && schermBreedte < 960){
    carouselModels.scrollLeft -= (schermBreedte / 2);
  }
  else {
    carouselModels.scrollLeft -= schermBreedte;
  }
})

carouselRechts.addEventListener("click", function() {
  var schermBreedte = window.innerWidth;
  if (schermBreedte > 960) {
    carouselModels.scrollLeft += (schermBreedte / 4);
  }
  else if (schermBreedte > 640 && schermBreedte < 960){
    carouselModels.scrollLeft += (schermBreedte / 2);
  }
  else {
    carouselModels.scrollLeft += schermBreedte;
  }
})




