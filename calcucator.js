let currentInput = "";
let history = JSON.parse(localStorage.getItem('calcHistory')) || [];

function calculate(val) {
    if (val === '=') {
        let result = eval(currentInput);
        saveToHistory(currentInput + " = " + result);
        currentInput = result;
    } else {
        currentInput += val;
    }
    updateDisplay();
}

function saveToHistory(entry) {
    history.push({time: new Date().toLocaleString(), detail: entry});
    localStorage.setItem('calcHistory', JSON.stringify(history));
    renderHistory();
}
