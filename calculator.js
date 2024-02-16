const display = document.getElementById("display");
const equationHistory = document.getElementById("equation-history");
const equalBtn = document.getElementById("equal");

function appendToDisplay(input) {
  display.value += input;
  display.textContent = display.value;
}

function clearDisplay() {
  display.value = "";
  equationHistory.innerHTML = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

equalBtn.addEventListener("click", () => {
  equationHistory.innerHTML = display.textContent;
});
