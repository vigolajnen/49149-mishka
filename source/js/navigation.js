"use strict";

var navToggle = document.querySelector(".navigation__toggle");
var navMainList = document.querySelector(".navigation__list");
var navItem = document.querySelector(".navigation__item:first-child");

navToggle.addEventListener("click", function() {
  navMainList.classList.toggle("navigation__list--closed");
  if (navToggle.classList.contains("navigation__toggle--closed")) {
    navToggle.classList.remove("navigation__toggle--closed");
    navToggle.classList.add("navigation__toggle--open");
    navItem.classList.add("navigation__item--active");
  } else {
    navToggle.classList.add("navigation__toggle--closed");
    navToggle.classList.remove("navigation__toggle--open");
    navItem.classList.remove("navigation__item--active");
  }
});
