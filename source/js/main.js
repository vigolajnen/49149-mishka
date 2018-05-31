"use strict";

var navMain = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var logo = document.querySelector(".js-logo");

navMain.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
    }
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
