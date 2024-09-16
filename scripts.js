// Variable to hold the current number/operand being entered
let current_number = "";

// Listen to button clicks for numbers and operation buttons
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
  } else if (value == "." && current_number.includes(".")) {
    return;
  }
  if (type == "number") {
    current_number += "" + value;
  } else {
    current_number = "";
  }
  if (display.value == "0") {
    display.value = value;
  } else {
    display.value += "" + value;
  }
}

// Clear the equation and total displays
function clearDisplays() {
  document.querySelector('input[name="equation_display"]').value = "";
  document.querySelector('input[name="total_display"]').value = "";
}

// calculate the total on the equation enteredd
function calculateTotal() {
  const e_display = document.querySelector('input[name="equation_display"]');
  const t_display = document.querySelector('input[name="total_display"]');
  if (e_display.value == "") {
    return;
  } else {
    const m_equation = e_display.value.replace(/×/g, "*").replace(/÷/g, "/");
    t_display.value = eval(m_equation);
    return;
  }
}
