
define(['controller'],
function(controller) {

// This function clears the input field after a new item is created
const clearInputField = function clearInputField() {

    let inputField = document.getElementById('input-itemName');
    inputField.value = '';

};

// This function validates and creates a new to do list item
const createNewItem = function createNewItem() {

    let inputField = document.getElementById('input-itemName');
    let userInput = inputField.value;

    let result = controller.itemCreationHandler(userInput);

    if (result === 'valid') {
        // flash green
        clearInputField();
        inputField.classList.add('input-success');
        setTimeout(function() {
            inputField.classList.remove('input-success');
        }, 500);

    } else if (result === 'only-spaces') {
        // flash red
        clearInputField();
        inputField.classList.add('input-error-spaces');
        setTimeout(function() {
            inputField.classList.remove('input-error-spaces');
        }, 1000);

    } else if (result === 'too-long') {
        // red text
        inputField.classList.add('input-error-length');
        setTimeout(function() {
            inputField.classList.remove('input-error-length');
        }, 1000);
    }

};

return {
    createNewItem: createNewItem
};

});
