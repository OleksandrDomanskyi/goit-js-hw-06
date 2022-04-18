
let counterValue = 0;

const refs = {
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
    formValue: document.querySelector('#value'),
}


refs.buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    refs.formValue.textContent = counterValue;
});

const buttonIncrementOnClick = function () {
    counterValue += 1;
    refs.formValue.textContent = counterValue;
}

refs.buttonIncrement.addEventListener('click', buttonIncrementOnClick);