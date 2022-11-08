function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.body;
const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", (event) => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = `${bodyColor.style.backgroundColor}`;
});
