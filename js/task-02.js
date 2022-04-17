const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// More semantic right solution^

const ingredientsAll = document.querySelector('ul#ingredients');

const ingredientLists = ingredients.map(ingredient => {
  
  const ingredientList = document.createElement('li');
  ingredientList.classList.add('list');

  const ingredientItem = document.createElement('p');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;

  ingredientList.appendChild(ingredientItem);
  return ingredientList;
});

ingredientsAll.append(...ingredientLists);

// Task solution:

// ingredientsAll.append(ingredientList);

// const ingredientItems = ingredients.map( ingredient => {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.classList.add('item');
//   ingredientItem.textContent = ingredient;
//   return ingredientItem;
// });

// ingredientsAll.append(...ingredientItems);

