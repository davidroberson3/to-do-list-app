
define(['model', 'controller'],
function(model, controller) {

// This function toggles the checkbox
const toggleCheckboxIcon = function toggleCheckboxIconOuter(element) {

    return function toggleCheckboxIconInner() {

        if (element.textContent === 'check_box_outline_blank') {
            element.textContent = 'check_box';
        } else {
            element.textContent = 'check_box_outline_blank';
        }

    };

};

// This function renders the item list
const renderItemList = function renderItemList() {

    // gets list html element
    let htmlList = document.getElementById('item-list');

    // clears list
    while(htmlList.firstChild) {
        htmlList.removeChild(htmlList.firstChild);
    }

    // renders items to list
    model.itemList.forEach(function(item) {

        let newElement = document.createElement('div');
        newElement.classList.add('item-container');

        // checkbox
        let newCheckbox = document.createElement('i');
        newCheckbox.classList.add('checkbox');
        newCheckbox.classList.add('material-icons');
        newCheckbox.classList.add('unselectable');
        if (item.getStatus() === 'incomplete') {
            newCheckbox.textContent = 'check_box_outline_blank';
        } else {
            newCheckbox.textContent = 'check_box';
        }
        newCheckbox.addEventListener('click', item.toggleStatus);
        newCheckbox.addEventListener('click', toggleCheckboxIcon(newCheckbox));
        newElement.appendChild(newCheckbox);

        // item
        let itemText = document.createElement('div');
        itemText.classList.add('item-text');
        itemText.textContent = item.name;
        newElement.appendChild(itemText);

        // delete button
        let newDeleteButton = document.createElement('i');
        newDeleteButton.classList.add('delete-button');
        newDeleteButton.classList.add('material-icons');
        newDeleteButton.classList.add('unselectable');
        newDeleteButton.textContent = 'delete_forever';
        newDeleteButton.addEventListener('click', controller.deleteItem(item.name));
        newDeleteButton.addEventListener('click', renderItemList);
        newElement.appendChild(newDeleteButton);

        // appends item to list
        htmlList.appendChild(newElement);

    });

};

return {
    renderItemList: renderItemList
};

});
