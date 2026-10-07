let count = 0;

const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
  counterDisplay.textContent = count;

  if (count > 0) {
    counterDisplay.style.color = 'green';
  } else if (count < 0) {
    counterDisplay.style.color = 'red';
  } else {
    counterDisplay.style.color = 'black';
  }
}

function handleIncrement() {
  count++;
  updateDisplay();
}

function handleDecrement() {
  count--;
  updateDisplay();
}

function handleReset() {
  count = 0;
  updateDisplay();
}
incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);
resetBtn.addEventListener('click', handleReset);