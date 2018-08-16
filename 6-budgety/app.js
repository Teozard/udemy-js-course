// BUDGET CONTROLLER
var budgetController = (function () {
    // code
})();


// UI CONTROLER
var UIController = (function () {
    // some code
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
          // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('hi hi');
    };

    //click on the button
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    //hit by enter
    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);
