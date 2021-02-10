console.log('hello console');
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay =document.getElementById('name-display');
changeButton.addEventListener('click', () => {
    console.log('value is', nameInput.value);
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});


