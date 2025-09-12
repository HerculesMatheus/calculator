function toggleMenu() {
  const element = document.querySelector(".navbar__options--mobile");
  const computedStyle = window.getComputedStyle(element);
  const displayValue = computedStyle.display;

  if (displayValue == "none") {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
}

export default toggleMenu;
