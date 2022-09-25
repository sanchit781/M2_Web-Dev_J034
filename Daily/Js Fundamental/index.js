const display = document.querySelector('.counter-preview');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

let value = 0;
function increment() {
  value += 1;
  display.textContent = value;
}

function decrement() {
    if (value <= 0) {
        value = 0
    }
    else {
        value -= 1;
        display.textContent = value; 
    }
}