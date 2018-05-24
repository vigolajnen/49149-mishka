"use strict";

var navToggle = document.querySelector(".navigation__toggle");
var navMainList = document.querySelector(".navigation__list");
var navItem = document.querySelector(".js-logo");

navToggle.addEventListener("click", function() {
  navMainList.classList.toggle("navigation__list--closed");
  if (navToggle.classList.contains("navigation__toggle--closed")) {
    navToggle.classList.remove("navigation__toggle--closed");
    navToggle.classList.add("navigation__toggle--open");
    navItem.classList.add("navigation__item--visible");
  } else {
    navToggle.classList.add("navigation__toggle--closed");
    navToggle.classList.remove("navigation__toggle--open");
    navItem.classList.remove("navigation__item--visible");
  }
});

var links = document.querySelectorAll(".modal--jump");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".size-choice__fon");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  });
};

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show")
    }
  }
});
