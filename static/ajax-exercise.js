"use strict";


// PART 1: SHOW A FORTUNE

function showgoodFortune(results){
    var status = results;
    $('#fortune-text').html(status);
    console.log("Success!");
};

function getFortune(evt) {
    $.get('/fortune', showgoodFortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER
function showWeather(results){

}


function getWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get('/weather-info', showWeather);
}

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


