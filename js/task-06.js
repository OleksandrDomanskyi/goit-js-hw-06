
const ref = {
    inputValue: document.querySelector('#validation-input'),
}

ref.inputValue.addEventListener('blur', onBlurInputValidation);

function onBlurInputValidation(event) {

    if (event.currentTarget.value.length === Number(ref.inputValue.dataset.length)) {
        ref.inputValue.classList = 'valid';       
    }
    
    else {
        ref.inputValue.classList = 'invalid';
    }
};