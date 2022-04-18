
const refs = {
    sizeControl: document.querySelector('#font-size-control'),
    inputText: document.querySelector('#text'),
};

refs.sizeControl.addEventListener('input', inputSizeValue);

function inputSizeValue(event) {
    refs.inputText.style.fontSize = `${event.target.value}px`;
}