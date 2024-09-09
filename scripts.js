const firstNumber = 0;
const secondNumber = 0;
const currentOperator = '';


const number_buttons = document.querySelectorAll('.number');
const display = document.querySelector('input[name="number_display"]');

number_buttons.forEach((btn) => {
    btn.addEventListener('click',() => {
        const number_value = btn.getAttribute('data-val');
        updateDisplay(number_value);
    });
});


function updateDisplay(val) {
    if (display.value === '0') display.value = '';
    display.value += val;
}


const operator_buttons = document.querySelectorAll('.operation');
var equation = '';
operator_buttons.forEach(btn => {
    btn.addEventListener('click',(e) => {
        if (e.target.getAttribute('data-val') === '+') {
            alert('plus');
        } else if (e.target.getAttribute('data-val') === '-') {
            alert('minus');
        } else if (e.target.getAttribute('data-val') === '*') {
            alert('times');
        } else if (e.target.getAttribute('data-val') === '/') {
            alert('divide');
        }
    });
});