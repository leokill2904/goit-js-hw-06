let inputName = document.getElementById("name-input");
let outputName = document.getElementById("name-output");

inputName.oninput = function () {
  if (inputName.value === "") {
    outputName.innerHTML = "Anonymous";
  } else {
    outputName.innerHTML = inputName.value;
  }
};
