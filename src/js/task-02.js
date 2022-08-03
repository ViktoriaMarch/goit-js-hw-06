const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingrEl = document.querySelector("ul")

// console.log(liEl)
const names = [];

for (let i = 0; i < ingredients.length; i += 1) {
const a = ingredients[i];

  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = a;

  names.push(liEl);
  
  }
  console.log(names);

ingrEl.append(...names)