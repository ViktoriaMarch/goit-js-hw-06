const items = document.querySelectorAll('.item');

for (let el of categories.children){
  let category = el.firstElementChild.textContent;
  let quantityElem = el.lastElementChild.children.length;
  console.log(`Category: ${category} \n Elements: ${quantityElem}`);
}