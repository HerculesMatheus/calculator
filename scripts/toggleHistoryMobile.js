function toggleHistory() {
  const history = document.querySelector(".calculator__history--mobile");
  const historyComputedStyle = window.getComputedStyle(history);
  const buttons = document.querySelectorAll(".calculator__button--mobile");
  const displayValue = historyComputedStyle.display;

  if (displayValue == "none") {
    history.style.display = "flex";
    buttons.forEach((btn) => {
      btn.style.opacity = 0;
      btn.style.transition = "opacity 250ms ease 0ms";
    });
    setTimeout(() => {
      history.style.animation = "slide-up 500ms ease both";
    }, 250);
  } else {
    history.style.animation = "slide-down 500ms ease both";
    buttons.forEach((btn) => {
      btn.style.opacity = 1;
      btn.style.transition = "opacity 250ms ease 500ms";
    });
    setTimeout(() => {
      history.style.display = "none";
      history.style.animation = "none";
    }, 650);
  }
}

export default toggleHistory;
