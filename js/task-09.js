function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  colorEl: document.querySelector('.color'),
  changeColorEl: document.querySelector('.change-color'),
}

refs.changeColorEl.addEventListener('click', onClickChangeButtonColor);

function onClickChangeButtonColor() {
  const color = getRandomHexColor();

  refs.bodyEl.style.backgroundColor = color;
  refs.colorEl.textContent = color;
}