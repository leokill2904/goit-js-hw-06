const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients')

const liElement = ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = ingredient;
  return listElement;
})

ingredientsList.append(...liElement)