"use strict";

var modalOpen = document.querySelector(".week-product__button");
var modal = document.querySelector(".size-choice");
var modalBtn = document.querySelector(".size-choice__button");

modalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("size-choice-show");
});

modalBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("size-choice-show");
});
