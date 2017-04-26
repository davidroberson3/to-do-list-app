
require(['view', 'controller'],
function(view, controller) {

// This function attaches handlers to the submission button and input field
const attachItemHandlers = function attachItemHandlers() {

    let button = document.getElementById('btn-createNewItem');

    button.addEventListener('click', view.createNewItem);
    button.addEventListener('click', view.renderItemList);

    let field = document.getElementById('input-itemName');

    field.onkeydown = function(key) {
       if(key.keyCode === 13){
         view.createNewItem();
         view.renderItemList();
       }
    };

};

// Initializes everything
attachItemHandlers();

});
