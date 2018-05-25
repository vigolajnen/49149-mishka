"use strict";

var navToggle = document.querySelector(".navigation__toggle");
var navMainList = document.querySelector(".navigation__list");
var logo = document.querySelector(".js-logo");

navToggle.addEventListener("click", function() {
  navMainList.classList.toggle("navigation__list--closed");
  navToggle.classList.toggle("navigation__toggle--closed");
  logo.classList.toggle("navigation__item--visible");
});

var orderLinks = document.querySelectorAll(".js-order");
var orderPopup = document.querySelector(".js-order-popup");

if (orderLinks.length > 0) {
  for (var i = 0; i < orderLinks.length; i++) {
    orderLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      orderPopup.classList.add("js-order-popup--show");
    });
  };

  window.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("size-choice__overlay")) {
      orderPopup.classList.remove("js-order-popup--show");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (orderPopup.classList.contains("js-order-popup--show")) {
        orderPopup.classList.remove("js-order-popup--show")
      }
    }
  });
}
