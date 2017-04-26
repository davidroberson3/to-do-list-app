
define(['model'],
function(model) {

// This function creates a new item
const createItem = function createItem(newItemName) {

    let newItem = model.ItemFactory(newItemName);
    model.itemList.push(newItem);

};

// This function deletes items from the storage array
const deleteItem = function deleteItemOuter(itemName) {

    return function deleteItemInner() {

        let index = model.itemList.findIndex(function(item) {
            return itemName === item.name;
        });

        if (index > -1) {
            model.itemList.splice(index, 1);
        }

    };

};

// This function validates the user input item name
const checkValidString = function checkValidString(userInput) {

    let doesContainText =
        ( userInput.match(/\S/) )
        ? true
        : false;

    let isShortEnough = (userInput.length < 101);

    if (doesContainText && isShortEnough) {
        return 'valid';

    } else if (doesContainText === false) {
        return 'only-spaces';

    } else if (isShortEnough === false) {
        return 'too-long';
    }

};

// This function validates and creates a new to do list item
const itemCreationHandler = function itemCreationHandler(itemName) {

    let inputCheck = checkValidString(itemName);

    if (inputCheck === 'valid') {
        createItem(itemName);
    }

    return inputCheck;

};

return {
    deleteItem: deleteItem,
    itemCreationHandler: itemCreationHandler
};

});
