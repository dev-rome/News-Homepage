"use strict";

const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.querySelector(".overlay");

btnOpen.addEventListener("click", () => {
  mobileMenu.classList.remove("hide");
  overlay.style.display = "block";
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.add("hide");
  overlay.style.display = "none";
});
