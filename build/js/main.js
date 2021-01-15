"use strict";

(function () {
  var headerNav = document.querySelector(".header__nav");
  var headerToggle = document.querySelector(".nav__toggle");

  headerNav.classList.remove("nav--nojs");

  headerToggle.addEventListener("click", function () {
    if (headerNav.classList.contains("nav--closed")) {
      headerNav.classList.remove("nav--closed");
      headerNav.classList.add("nav--opened");
    } else {
      headerNav.classList.add("nav--closed");
      headerNav.classList.remove("nav--opened");
    }
  });
})();
