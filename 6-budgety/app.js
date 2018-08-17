// BUDGET CONTROLLER
var budgetController = (function() {
    // code
})();


// UI CONTROLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {


    var setupEventListeners = function() {
        // get DOM list from the UI Controller
        var DOM = UICtrl.getDOMstrings();

        //click on the button
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        //hit by enter
        document.addEventListener('keypress', function(event) {
            // 13 is the keycode for the enter key
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };


})(budgetController, UIController);


controller.init();
