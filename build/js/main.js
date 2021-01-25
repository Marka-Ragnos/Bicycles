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

  // var phoneInputs = document.querySelectorAll('input[type="tel"]');
  // var COUNTRY_CODE = "+7";

  // var onInputPhoneInput = (evt) => {
  //   var target = evt.target;
  //   var matrix = `${COUNTRY_CODE} (___) ___ __ __`;
  //   var def = matrix.replace(/\D/g, "");
  //   var i = 0;
  //   var val = target.value.replace(/\D/g, "");

  //   if (def.length >= val.length) {
  //     val = def;
  //   }

  //   target.value = matrix.replace(/./g, (a) => {
  //     return /[_\d]/.test(a) && i < val.length
  //       ? val.charAt(i++)
  //       : i >= val.length
  //       ? ""
  //       : a;
  //   });
  // };

  // var onFocusPhoneInput = ({ target }) => {
  //   if (!target.value) {
  //     target.value = COUNTRY_CODE;
  //     target.addEventListener("input", onInputPhoneInput);
  //     target.addEventListener("blur", onBlurPhoneInput);
  //   }
  // };

  // var onBlurPhoneInput = ({ target }) => {
  //   if (target.value === COUNTRY_CODE) {
  //     target.value = "";
  //     target.removeEventListener("input", onInputPhoneInput);
  //     target.removeEventListener("blur", onBlurPhoneInput);
  //   }
  // };

  // var initPhoneMask = () => {
  //   if (phoneInputs.length) {
  //     phoneInputs.forEach((input) => {
  //       input.addEventListener("focus", onFocusPhoneInput);
  //     });
  //   }
  // };

  // initPhoneMask();
})();
