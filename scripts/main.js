import { applySavedTheme, toggleTheme } from "./toggleTheme.js";
import toggleMenu from "./toggleMobileMenu.js";

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
