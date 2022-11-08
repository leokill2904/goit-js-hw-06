const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//створюю пустий масив
const liElement = [];
//створюю елемент і пушу його в масив
const createListElement = (element) => {
  const listElement = document.createElement("li");
  listElement.innerText = element;
  liElement.push(listElement);
};
//перебираю масив
ingredients.map(createListElement);

//передаю массива в HTML документ
const ingredientsElement = document.querySelector("#ingredients");
ingredientsElement.append(...liElement);
