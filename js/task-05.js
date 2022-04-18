
const refs = {
    inputText: document.querySelector('#name-input'),
    outputText: document.querySelector('#name-output'),
};

refs.inputText.addEventListener('input', newInputText);

function newInputText() {
    refs.outputText.textContent = refs.inputText.value;
    
    if (refs.outputText.textContent === '') {
        refs.outputText.textContent = 'Anonymous';
    }   
}

