
define([''],
function() {

// This array stores all existing items (until they are deleted)
const itemList = [];

// This is the prototype for all items
const ItemFactory = function ItemFactory(newItemName) {

    // status is private
    let status = 'incomplete';

    let newItem = {

        name: newItemName,

        getStatus () {
            return status;
        },

        toggleStatus () {
            if (status === 'incomplete') {
                status = 'complete';
            } else {
                status = 'incomplete';
            }
        }

    };

    return newItem;

};

return {
    itemList: itemList,
    ItemFactory: ItemFactory
};

});
