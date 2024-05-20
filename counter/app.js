// app.js
let currentValue = 0;

document.querySelector('.increase').addEventListener('click', () => {
    currentValue++;
    if (currentValue >= 10) {
        currentValue = 10;
    }
    document.querySelector('.screen').textContent = currentValue;
});

document.querySelector('.decrement').addEventListener('click', () => {
    currentValue--;
    if (currentValue <= 0) {
        currentValue = 0;
    }
    document.querySelector('.screen').textContent = currentValue;
});
