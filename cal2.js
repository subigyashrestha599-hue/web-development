const display = document.getElementById('display');
const buttons = document.querySelectorAll('.hello');
const clearButton = document.querySelector('button:first-of-type');
const backspace = document.querySelector('button:nth-of-type(4)');
const equalButton = document.querySelector('.equal');


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.value += btn.textContent.trim();
    });
});


clearButton.addEventListener('click', () => {
    display.value = '';
});



backspace.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});


equalButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
});