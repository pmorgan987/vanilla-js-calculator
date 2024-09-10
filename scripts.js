let firstNumber = 0;
let currentOperator = "";
let clearDisplay = false;

const number_buttons = document.querySelectorAll(".number");
const display = document.querySelector('input[name="number_display"]');

number_buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (clearDisplay) {
      display.value = "";
      clearDisplay = false;
    }
    const number_value = btn.getAttribute("data-val");
    updateDisplay(number_value);
  });
});

function updateDisplay(val) {
  if (display.value === "0") display.value = "";
  display.value += val;
}

const operator_buttons = document.querySelectorAll(".operation");
var equation = "";
operator_buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-val") === "+") {
    } else if (e.target.getAttribute("data-val") === "-") {
    } else if (e.target.getAttribute("data-val") === "*") {
    } else if (e.target.getAttribute("data-val") === "/") {
    } else if (e.target.getAttribute("data-val") === "=") {
    } else if (e.target.getAttribute("data-val") === "Clear") {
      firstNumber = 0;
      currentOperator = "";
      clearDisplay = false;
      display.value = "0";
    }
  });
});

const body = document.querySelector("body");
body.addEventListener("keypress", function (e) {
  let numberKeys = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  let operatorKeys = new Array("+", "-", "*", "=");
  if (numberKeys.includes(e.key)) {
    alert("number pressed");
  } else if (operatorKeys.includes(e.key)) {
    alert("operator pressed");
  } else {
    alert("we dont care about this key");
  }
});
