var currentValue = "";
var firstValue = "";
var secondValue = "";
var operator = "";
const operators = ["plus", "minus", "times", "divide", "percent"];

function calc() {
  const buttons = document.querySelectorAll(".calculator-button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "equal") {
        calcResult();
        showResult(currentValue);
        updateVisorOperator();
        return;
      }

      if (operators.includes(btn.id)) {
        setOperator(btn);
        updateVisorOperator();
        return;
      }

      if (btn.id === "ac") {
        clean();
      }

      if (btn.id === "delete") {
        backspace();
      }

      if (btn.id === "pi") {
        pi();
      }

      validateValue(btn);
    });
  });
}

function updateVisorValue() {
  const visorValue = document.querySelectorAll(".visor__value");
  visorValue.forEach((v) => (v.innerText = currentValue || "0"));
}

function validateValue(btn) {
  const char = btn.value;

  if (!char) return;
  if (char === "," && currentValue.includes(",")) return;
  if (currentValue.length >= 17) return;
  currentValue += char;

  updateVisorValue();
}

function updateVisorOperator() {
  const visorOperator = document.querySelectorAll(".visor__operator");

  visorOperator.forEach((v) => (v.innerText = firstValue + operator));
}

function setOperator(btn) {
  if (currentValue) {
    firstValue = currentValue;
  }
  if (firstValue === "") {
    return;
  }
  currentValue = "";
  updateVisorValue();

  if (btn.id === "plus") operator = "+";
  if (btn.id === "minus") operator = "-";
  if (btn.id === "times") operator = "*";
  if (btn.id === "divide") operator = "/";
  if (btn.id === "percent") operator = "%";
}

function calcResult() {
  secondValue = currentValue;

  let result;

  const num1 = parseFloat(firstValue.replace(",", "."));
  const num2 = parseFloat(secondValue.replace(",", "."));

  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "/") result = num1 / num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "%") result = (num1 / 100) * num2;

  if (result.toString().includes(".")) {
    currentValue = parseFloat(result.toFixed(5)).toString().replace(".", ",");
  } else {
    currentValue = result.toString();
  }

  firstValue = "";
  secondValue = "";
  operator = "";
}

function showResult(value) {
  const visorValue = document.querySelectorAll(".visor__value");
  visorValue.forEach((v) => (v.innerText = value));
}

function clean() {
  firstValue = "";
  secondValue = "";
  operator = "";
  currentValue = "";

  updateVisorValue();
  updateVisorOperator();
}

function backspace() {
  currentValue = currentValue.slice(0, -1);

  updateVisorValue();
}

function pi() {
  currentValue = "3,14";

  updateVisorValue();
}

export default calc();
