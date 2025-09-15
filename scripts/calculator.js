var currentValue = "";
var firstValue = "";
var secondValue = "";
var operator = "";
const operadores = ["plus", "minus", "times", "divide"];
const hist = new Array(5);

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

      if (operadores.includes(btn.id)) {
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

      updateVisorValue(btn);
    });
  });
}

function updateVisorValue(btn) {
  const visorValue = document.querySelectorAll(".visor__value");
  const char = btn.value;

  if (!char) return;
  if (char === "." && currentValue.includes(".")) return;
  if (currentValue.length >= 17) return;
  currentValue += char;
  visorValue.forEach((v) => (v.innerText = currentValue));
}

function updateVisorOperator() {
  const visorOperator = document.querySelectorAll(".visor__operator");

  visorOperator.forEach((v) => (v.innerText = firstValue + operator));
}

function setOperator(btn) {
  firstValue = currentValue;
  currentValue = "";

  if (btn.id === "plus") operator = "+";
  if (btn.id === "minus") operator = "-";
  if (btn.id === "times") operator = "*";
  if (btn.id === "divide") operator = "/";
}

function calcResult() {
  secondValue = currentValue;

  let result;

  if (operator === "+")
    result = parseFloat(firstValue) + parseFloat(secondValue);
  if (operator === "-")
    result = parseFloat(firstValue) - parseFloat(secondValue);
  if (operator === "/")
    result = parseFloat(firstValue) / parseFloat(secondValue);
  if (operator === "*")
    result = parseFloat(firstValue) * parseFloat(secondValue);

  if (result.toString().includes(".")) {
    currentValue = parseFloat(result.toFixed(5)).toString();
  } else {
    currentValue = result.toString();
  }

  let historyExpression = `${firstValue.toString()} + ${secondValue.toString()} = ${currentValue.toString()}`;

  history(historyExpression);

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

  const visorValue = document.querySelectorAll(".visor__value");
  visorValue.forEach((v) => (v.innerText = currentValue || "0"));

  updateVisorOperator();
}

function backspace() {
  currentValue = currentValue.slice(0, -1);

  const visorValue = document.querySelectorAll(".visor__value");
  visorValue.forEach((v) => (v.innerText = currentValue || "0"));
}

function history(expression) {
  if (hist < 5) {
    hist.unshift(expression);
    return;
  }
  hist.pop();
  hist.unshift(expression);
}

function populateHistory(hist) {
  const historyLayout = document.querySelectorAll(".history");
  historyLayout.forEach((e) => e.innerHTML);
}

export default calc();
