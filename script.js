function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let input = document.getElementById('result').value;
    let result = eval(input); // Using eval for simplicity (not recommended for production)
    document.getElementById('result').value = result;
}

function backspace() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

