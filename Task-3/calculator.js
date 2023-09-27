let result = document.getElementById("result");
let historyList = document.getElementById("historyList");

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function clearAllResults() {
  result.value = "";
  historyList.innerHTML = "";
}

function calculate() {
  try {
    const expression = result.value;
    const resultValue = eval(expression);
    result.value = resultValue;
    addToHistory(expression, resultValue);
  } catch (error) {
    result.value = "Error";
  }
}

function addToHistory(expression, resultValue) {
  const historyItem = document.createElement("li");
  historyItem.textContent = `${expression} = ${resultValue}`;
  historyList.appendChild(historyItem);
}
