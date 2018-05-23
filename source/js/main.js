"use strict";

var navToggle = document.querySelector(".navigation__toggle");
var navMainList = document.querySelector(".navigation__list");
var navItem = document.querySelector(".navigation__item:first-child");

var modalOpen = document.querySelector(".week-product__button");
var modal = document.querySelector(".size-choice");
var modalBtn = document.querySelector(".size-choice__button");

navToggle.addEventListener('click', function() {
  navMainList.classList.toggle("navigation__list--closed");
  if (navToggle.classList.contains('navigation__toggle--closed')) {
    navToggle.classList.remove('navigation__toggle--closed');
    navToggle.classList.add('navigation__toggle--open');
    navItem.classList.add("navigation__item--active");
  } else {
    navToggle.classList.add('navigation__toggle--closed');
    navToggle.classList.remove('navigation__toggle--open');
    navItem.classList.remove("navigation__item--active");
  }
});

modalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("size-choice-show");
});

modalBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("size-choice-show");
});
