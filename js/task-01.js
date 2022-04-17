// console.log(window);
// console.dir(document);
// console.log(document);

const totalCategoriesInfo = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${totalCategoriesInfo.length}`);

totalCategoriesInfo.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});