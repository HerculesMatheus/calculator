import { applySavedTheme, toggleTheme } from "./toggleTheme.js";
import toggleMenu from "./toggleMobileMenu.js";
import toggleHistory from "./toggleHistoryMobile.js";
import calc from "./calculator.js";

applySavedTheme();

document.querySelectorAll(".toggle-theme").forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleTheme();
  });
});

document
  .querySelector(".navbar__icon--mobile")
  .addEventListener("click", () => {
    toggleMenu();
  });

document.addEventListener("DOMContentLoaded", () => {
  calc();
});

document
  .querySelector(".show-history--mobile")
  .addEventListener("click", () => {
    toggleHistory();
  });
