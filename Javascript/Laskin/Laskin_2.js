// Inputin arvon määritys
const inputField = document.getElementById('input');

// Lisää merkin inputtiin
const insertNum = num => inputField.textContent += num;

// Suorittaa laskennan
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// Poistaa yhden merkin inputista
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// Tyhjentää inputin
const clearInput = () => inputField.textContent = '';
