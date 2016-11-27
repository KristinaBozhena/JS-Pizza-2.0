/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');
var PizzaCart = require('./PizzaCart');
var Pizza_List = require('../Pizza_List');

//HTML едемент куди будуть додаватися піци
var $pizza_list = $("#pizza_list");


filter = {
    meat: 0,
    pineapple: 1,
    mushroom: 2,
    ocean: 3,
    wthoutmeat: 4
};

function showPizzaList(list) {
    //Очищаємо старі піци в кошику
    $pizza_list.html("");

    //Онволення однієї піци
    function showOnePizza(pizza) {
        var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

        var $node = $(html_code);

        $node.find(".buy-big").click(function(){
            console.log(pizza);
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
        });
        $node.find(".buy-small").click(function(){
            console.log(pizza);
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
        });

        $pizza_list.append($node);
    }

    list.forEach(showOnePizza);
}

function filterPizza(filter) {
    //Масив куди потраплять піци які треба показати
    var pizza_shown = [];

    Pizza_List.forEach(function(pizza){
        //Якщо піца відповідає фільтру
        if(pizza.content.filter){
            pizza_shown.push(pizza);
        }

        //TODO: зробити фільтри
    });

    //Показати відфільтровані піци
    showPizzaList(pizza_shown);
}

function filter(pizza_list) {

}

function initialiseMenu() {
    //Показуємо усі піци
    showPizzaList(Pizza_List);
    
}

exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;