const button = {
  additionButton: document.querySelector("[data-action='decrement']"),
  subtractionButton: document.querySelector("[data-action='increment']"),
  valueClick: document.querySelector("#value"),
};
let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  button.valueClick.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  button.valueClick.textContent = counterValue;
};

button.subtractionButton.addEventListener("click", increment);
button.additionButton.addEventListener("click", decrement);
