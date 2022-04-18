
const ref = {
    inputValue: document.querySelector('#validation-input'),
}

ref.inputValue.addEventListener('blur', onBlurInputValidation);

function onBlurInputValidation(event) {

    if (event.currentTarget.value.length === Number(ref.inputValue.dataset.length)) {
        ref.inputValue.classList.add('valid');
        ref.inputValue.classList.remove('invalid');        
    }
    
    else {
        ref.inputValue.classList.add('invalid');
        ref.inputValue.classList.remove('valid');
    }
};