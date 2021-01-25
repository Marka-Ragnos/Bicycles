"use strict";

(function () {
  var headerNav = document.querySelector(".header__nav");
  var headerToggle = document.querySelector(".nav__toggle");
  var bodyNode = document.body;
  var navLinks = document.querySelectorAll(".nav__item");

  headerNav.classList.remove("nav--nojs");

  if (navLinks) {
    Array.prototype.forEach.call(navLinks, function (link) {
      link.addEventListener("click", function () {
        if (bodyNode.classList.contains("scroll-lock")) {
          bodyNode.classList.remove("scroll-lock");
        }
      });
    });
  }

  headerToggle.addEventListener("click", function () {
    if (headerNav.classList.contains("nav--closed")) {
      headerNav.classList.remove("nav--closed");
      headerNav.classList.add("nav--opened");
      bodyNode.classList.add("scroll-lock");
    } else {
      headerNav.classList.add("nav--closed");
      headerNav.classList.remove("nav--opened");
      bodyNode.classList.remove("scroll-lock");
    }
  });
})();
