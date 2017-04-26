
define(['./view/render', './view/item-creation'],
function(render, itemCreation) {

return {
    renderItemList: render.renderItemList,
    createNewItem: itemCreation.createNewItem
};

});
