function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  newBoxes: document.querySelector('#boxes'),
}

// console.log(refs.inputNumber);
// console.log(refs.buttonCreate);
// console.log(refs.buttonDestroy);
// console.log(refs.newBoxes);

refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

let boxSize = 20;
let boxSizeStep = 10;

function createBoxes (amount) {
  amount = refs.inputNumber.value;
  const boxes = [];
  
  while (boxes.length < amount) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${boxSize + boxSizeStep}px`;
    box.style.width = `${boxSize + boxSizeStep}px`; 
    
    boxSizeStep += 10;

    boxes.push(box);
  }

  refs.newBoxes.append(...boxes);  
}

function destroyBoxes() {
  refs.newBoxes.innerHTML = '';
  refs.inputNumber.value = '';
  boxSizeStep = 10;
}