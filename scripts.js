const number_buttons = document.querySelectorAll(".number, .operation");

number_buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.getAttribute("data-val");
    if (value == "Clear") {
      clearDisplays();
    } else if (value == "=") {
      calculateTotal();
    } else if (btn.classList.contains("operation")) {
      updateEquationDisplay(value, "operation");
    } else {
      updateEquationDisplay(value, "number");
    }
  });
});

function updateEquationDisplay(value, type) {
  const display = document.querySelector('input[name="equation_display"]');
  const lastchar = display.value.slice(-1);
  if (type == "operation" && !Number.isInteger(Number.parseInt(lastchar))) {
    display.value = display.value.slice(0, -1) + value;
    return;
  }
  if (display.value == "0") {
    display.value = value;
  } else {
    display.value += "" + value;
  }
}

function clearDisplays() {
  document.querySelector('input[name="equation_display"]').value = "";
  document.querySelector('input[name="total_display"]').value = "";
}

function calculateTotal() {
  const e_display = document.querySelector('input[name="equation_display"]');
  const t_display = document.querySelector('input[name="total_display"]');
  if (e_display.value == "") {
    return;
  } else {
    t_display.value = eval(e_display.value);
  }
}
