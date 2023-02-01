const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const markUp = ingredients.map((item) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = item;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

const ingredientsList = document.querySelector("ul#ingredients");
ingredientsList.append(...markUp);
