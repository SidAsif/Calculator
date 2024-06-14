// script.js
const resultInput = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');

let expression = '';

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(e) {
    const buttonText = e.target.innerHTML;

    switch (buttonText) {
        case '=':
            evaluateExpression();
            break;
        case 'AC':
            clearExpression();
            break;
        case 'DEL':
            deleteLastCharacter();
            break;
        default:
            appendToExpression(buttonText);
            break;
    }
}

function evaluateExpression() {
    try {
        expression = eval(expression).toString();
        resultInput.value = expression;
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function clearExpression() {
    expression = '';
    resultInput.value = '';
}

function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    resultInput.value = expression;
}

function appendToExpression(char) {
    expression += char;
    resultInput.value = expression;
}


//--------------Dark mode & light mode --------------
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const container = document.getElementsByClassName('container')[0];

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.contains('bi-brightness-high-fill')) {
        container.style.background = '#071013';
        body.style.background = '#DADFF7';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        container.style.background = 'linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)';
        body.style.background = 'rgb(25, 25, 25)';
        body.style.transition = '2s';
    }
});
