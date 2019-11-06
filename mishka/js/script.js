// Open/close navigation menu on mobile

var nav = document.querySelector(".navigation");
var navButton = document.querySelector(".navigation__toggle");

nav.classList.remove("navigation--nojs");

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (nav.classList.contains("navigation--closed")) {
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
  } else {
    nav.classList.add("navigation--closed");
    nav.classList.remove("navigation--opened");
  }
});

// Open/close popup on index and catalog pages

var popupCart = document.querySelector(".cart-popup");
var popupOverlay = document.querySelector(".overlay");
var openButton = document.querySelectorAll(".js-popup-button");
var closeButton = document.querySelector(".cart-popup__button");


for (var i = 0; i < openButton.length; i++){
  openButton[i].addEventListener("click", function (event) {
    event.preventDefault();
    popupCart.classList.remove("cart-popup--hidden");
    popupOverlay.classList.remove("overlay--hidden");
  });
}

closeButton.addEventListener("click", funct-ion (event) {
  event.preventDefault();
  popupCart.classList.add("cart-popup--hidden");
  popupOverlay.classList.add("overlay--hidden");
});

popupOverlay.addEventListener("click", function (event) {
  event.preventDefault();
  popupCart.classList.add("cart-popup--hidden");
  popupOverlay.classList.add("overlay--hidden");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (!popupCart.classList.contains("cart-popup--hidden")) {
      popupCart.classList.add("cart-popup--hidden");
      popupOverlay.classList.add("overlay--hidden");
    }
  }
});
