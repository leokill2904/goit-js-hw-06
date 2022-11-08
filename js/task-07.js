let fontSizeControl = document.getElementById("font-size-control");
let textChanging = document.getElementById("text");

fontSizeControl.oninput = function () {
  textChanging.style.fontSize = fontSizeControl.value + "px";
};
