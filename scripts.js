const number_buttons = document.querySelectorAll(".number, .operation");

number_buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.getAttribute("data-val");
    if (btn.classList.contains("operation")) {
      updateEquationDisplay(value, "operation");
    } else {
      updateEquationDisplay(value, "number");
    }
  });
});

function updateEquationDisplay(value, type) {
  const display = document.querySelector('input[name="equation_display"]');
  const lastchar = display.value.slice(-1);
  if (type == "operation" && !Number.isInteger(lastchar)) {
    return;
  }
  if (display.value == "0") {
    display.value = value;
  } else {
    display.value += "" + value;
  }
}
