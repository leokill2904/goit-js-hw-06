const commonCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${commonCategories.length}`);

const categoriesArray = [...commonCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
