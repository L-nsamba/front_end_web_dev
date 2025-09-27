const celsius = document.getElementById(`celsius`);
const tempButton = document.getElementById(`tempButton`);
const fahrenheit = document.getElementById(`fahrenheit`);


tempButton.onclick = function(){
    let toFahrenheit = (celsius.value * 9/5) + 32;
    toFahrenheit = Number(toFahrenheit);
    fahrenheit.value = toFahrenheit;
}

const kilo = document.getElementById(`kilo`);
const weightBtn = document.getElementById(`weightBtn`);
const pounds = document.getElementById(`pounds`);

weightBtn.onclick = function(){
    let toPounds = kilo.value * 2.205;
    toPounds = Number(toPounds.toFixed(3));
    pounds.value = toPounds;
}

const km = document.getElementById(`km`);
const distanceBtn = document.getElementById(`distanceBtn`);
const miles = document.getElementById(`miles`);

distanceBtn.onclick = function(){
    let toMiles = km.value / 1.609;
    toMiles = Number(toMiles.toFixed(3));
    miles.value = toMiles;
}