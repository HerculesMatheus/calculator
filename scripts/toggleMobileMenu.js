function toggleMenu() {
  const element = document.querySelector(".navbar__options--mobile");
  const computedStyle = window.getComputedStyle(element);
  const opacityValue = computedStyle.opacity;

  if (opacityValue == 0) {
    element.style.display = "flex";
    setTimeout(() => {
      element.style.opacity = 1;
    }, 250);
  } else {
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.display = "none";
    }, 250);
  }
}

export default toggleMenu;
